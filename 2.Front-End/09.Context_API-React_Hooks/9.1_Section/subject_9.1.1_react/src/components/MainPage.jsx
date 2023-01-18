import { useEffect, useState } from "react";

function MainPage() {
  const INIT_EMAILS = [
    {
      id: 0,
      title: "Estou na Disney, segue fotos com o Mickey!",
      status: 0
    },
    {
      id: 1,
      title: "São, pelo menos, oito Hooks essenciais! Inadmissível...",
      status: 0
    },
    {
      id: 2,
      title: "Larga de ser fei, fi!",
      status: 0
    },
    {
      id: 3,
      title: "Já ouviu a palavra do todo poderoso Marx hoje?",
      status: 0,
    },
    {
      id: 4,
      title: "Ninguém me respeita, já estou acostumado...",
      status: 0,
    },
  ]

  const [emails, setEmails] = useState(INIT_EMAILS);

  useEffect(() => {
    const allRead = emails.every(({ status }) => status === 1);

    if (allRead) alert('Parabéns! Você leu todas suas mensagens!');
  }, [emails]);

  const handleSingle = ({ id }) => {
    const updateEmails = emails.map((currEmail) => {
      const { id: currId, status } = currEmail;
      if (id === currId) {
        return { ...currEmail, status: status === 0 ? 1 : 0 };
      } return currEmail;
    });

    setEmails(updateEmails);

  };

  const handleAll = (status) => {
      const updateEmails = emails.map((currEmail) => {
        return { ...currEmail, status }
      });

      setEmails(updateEmails);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => handleAll(1)}
      >
        Mark all as read
      </button>

      <button
        type="button"
        onClick={() => handleAll(0)}
      >
        Mark all as unread
      </button>

      <ul style={{ 'listStyleType': 'none' }}>
        {emails.map((email) => (
          <li
            key={email.id}
            style={{ border: email.status === 0 ? '1px solid red' : 'none' }}
          >
            <p>{email.title}</p>

            <button
              type="button"
              onClick={() => handleSingle(email)}
              disabled={email.status === 1}
            >
              Read
            </button>

            <button
              type="button"
              onClick={() => handleSingle(email)}
              disabled={email.status === 0}
            >
              Unread
            </button>
          </li>
        ))}
      </ul>
    </>
  );

}

export default MainPage;