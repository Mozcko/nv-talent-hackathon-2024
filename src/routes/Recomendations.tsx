import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import OpenAI from "openai";
import { NavLink } from 'react-router-dom';
import Typed from 'typed.js';

const Recommendations = () => {
  const questions = [
    {
      "question": "¿Cuál es tu objetivo principal al buscar hacer crecer tu negocio?",
      "answers": ["Expandir mercado", "Incrementar ventas", "Mejorar rentabilidad", "Diversificar productos/servicios"]
    },
    {
      "question": "¿Cuál es el segmento de mercado al que principalmente te diriges?",
      "answers": ["Consumidor final", "Empresas", "Sector específico (ej. tecnología, moda, salud)", "Localidad geográfica"]
    },
    {
      "question": "¿Cuál es tu estrategia de marketing actual?",
      "answers": ["Publicidad en redes sociales", "Email marketing", "Participación en eventos locales", "Colaboraciones con otras empresas"]
    },
    {
      "question": "¿Qué recursos adicionales necesitas para expandir tu negocio?",
      "answers": ["Financiamiento", "Personal adicional", "Capacitación", "Mejora de infraestructura"]
    },
    {
      "question": "¿Cuáles son los principales desafíos que enfrentas en este momento?",
      "answers": ["Competencia", "Baja demanda", "Problemas de logística", "Falta de visibilidad en el mercado"]
    },
    {
      "question": "¿Cómo defines el éxito para tu negocio?",
      "answers": ["Crecimiento de ingresos", "Reconocimiento de marca", "Satisfacción del cliente", "Rentabilidad sostenible"]
    },
    {
      "question": "¿Cuál es tu plan para diferenciarte de la competencia?",
      "answers": ["Innovación en productos/servicios", "Calidad superior", "Atención al cliente personalizada", "Precios competitivos"]
    },
    {
      "question": "¿Qué estrategias de fidelización de clientes has implementado?",
      "answers": ["Programas de lealtad", "Descuentos para clientes frecuentes", "Eventos exclusivos para clientes", "Atención postventa personalizada"]
    },
    {
      "question": "¿Cómo evalúas la satisfacción del cliente en tu negocio?",
      "answers": ["Encuestas de satisfacción", "Feedback directo de los clientes", "Análisis de reseñas en línea", "Seguimiento de quejas y reclamaciones"]
    },
    {
      "question": "¿Qué recursos y herramientas utilizas para llevar el control financiero de tu negocio?",
      "answers": ["Software de contabilidad", "Presupuestos detallados", "Asesoría financiera externa", "Seguimiento de métricas financieras clave"]
    }
  ];

  const [answers, setAnswers] = useState({});
  const [showForm, setShowForm] = useState(true);
  const [response, setResponse] = useState('');
  const [typedInstance, setTypedInstance] = useState(null); // Estado para guardar la instancia de Typed

  const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
  });

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prevAnswers => ({
     ...prevAnswers,
      [questionId]: answer
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const answersArray = Object.values(answers);
    console.log('Respuestas del usuario:', answersArray);

    // Generar el prompt para la interacción con la IA
    const prompt = generatePrompt(answers);
    console.log('Prompt para la IA:', prompt);

    // Llamar a la función para interactuar con la IA
    interactWithAI(prompt);

    // Ocultar el formulario
    setShowForm(false);
  };

  const generatePrompt = (answers) => {
    let prompt = "Eres un experto en finanzas y microempresas estas teniendo una "
    "entrevista con un microempresario dale recomendaciones utiles para su negocio "
    "basado en las siguientes preguntas y respuestas obtenidas en dicha entrevista:"
    "procura usar saltos de linea e identacion para que sea mas comprensible \n\n";
    for (const [questionId, answer] of Object.entries(answers)) {
      prompt += `Q: ${questionId}. ${questionIdToText(questionId)}\n`;
      prompt += `A: ${answer}\n\n`;
    }

    prompt += "Please generate a helpful and accurate response based on the user's questions and answers.\n";
    return prompt;
  };

  const questionIdToText = (questionId) => {
    const questions = [
        "¿Cuál es tu objetivo principal al buscar hacer crecer tu negocio?",
        "¿Cuál es el segmento de mercado al que principalmente te diriges?",
        "¿Cuál es tu estrategia de marketing actual?",
        "¿Qué recursos adicionales necesitas para expandir tu negocio?",
        "¿Cuáles son los principales desafíos que enfrentas en este momento?",
        "¿Cómo defines el éxito para tu negocio?",
        "¿Cuál es tu plan para diferenciarte de la competencia?",
        "¿Qué estrategias de fidelización de clientes has implementado?",
        "¿Cómo evalúas la satisfacción del cliente en tu negocio?",
        "¿Qué recursos y herramientas utilizas para llevar el control financiero de tu negocio?",
      // Add more questions here if you have more than three.
    ];

    return questions[questionId - 1];
  };

  const interactWithAI = async (prompt) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user", content: prompt
        }],
        temperature: 0.7,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      const answer = response.choices[0].message.content;

      console.log('Respuesta de la IA:', answer);
      setResponse(answer);
    } catch (error) {
      console.error('Error al interactuar con la API de OpenAI:', error);
    }
  };

  useEffect(() => {
    if (response) {
      if (typedInstance) {
        typedInstance.destroy(); // Destruye la instancia de Typed existente antes de crear una nueva
      }
      const newTypedInstance = new Typed('#typed-element', {
        strings: [response], // Mostrar la respuesta de la IA
        typeSpeed: 1,
      });
      setTypedInstance(newTypedInstance); // Actualiza el estado con la nueva instancia de Typed
    }
  }, [response]); // Dependencia para ejecutar el efecto cuando cambia la respuesta

  return (
    <div className="p-4 bg-fill-100 container mx-auto">
      <motion.h1
        className="text-3xl font-bold text-primary mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Business Wizard
      </motion.h1>
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <label className="block text-black-100 mb-2" htmlFor={`question${index + 1}`}>
                {question.question}
              </label>
              <select
                id={`question${index + 1}`}
                onChange={e => handleAnswerChange(index + 1, e.target.value)}
                className="block w-full p-2 border border-black-200 rounded-md shadow-sm focus:outline-none focus:border-primary"
              >
                <option value="">Seleccione una opción</option>
                {question.answers.map((answer, index) => (
                  <option key={index} value={answer}>
                    {answer}
                  </option>
                ))}
              </select>
            </motion.div>
          ))}
          <button
            type="submit"
            className="rounded-md py-2 px-4 bg-primary text-white-100 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
          >
            Enviar
          </button>
        </form>
      )}
      {!showForm && (
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-md"
            >
            <p className="text-black-100 mb-2">
              Business Wizard te recomienda: 
              <div id="typed-element"></div>
            </p>
            <NavLink 
              to="https://www.fundacioncoppel.org/coppel-emprende/"
              className="bg-accent-100 hover:bg-primary text-white font-bold py-2 px-4 rounded"
            >
              Quiero saber más
            </NavLink>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
