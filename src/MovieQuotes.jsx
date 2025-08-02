import { useState } from "react";
import Quote from "./Quotes.jsx";
import "./NavStyle.css";

    const initialQuotes = [{
    Title: "GOOOOOOOOOOODMORNING VIETNAM!!!",
    Paragraph: "Goodmorning Vietnam",
    id: crypto.randomUUID(),
  },
  {
    Title: "Welcome To the House of the Rising Sun.",
    Paragraph: "It's a house in New Orleans",
    id: crypto.randomUUID(),
  },
  {
    Title: "Luke, I am your father",
    Paragraph: "Star Wars: The Empire Strikes Back",
    id: crypto.randomUUID(),
  },
  {
    Title: "Keep the change you filthy animal.",
    Paragraph: "Home Alone",
    id: crypto.randomUUID(),
  },
  {
    Title: "Life is like a box of chocoloates.",
    Paragraph: "Forest Gump",
    id: crypto.randomUUID(),
  },
  {
    Title: "And you will know my name is the LORD, when I lay my vengence apon thee!",
    Paragraph: "Pulp Fiction",
    id: crypto.randomUUID(),
  },
  {
    Title: "Say hello to my little friend!",
    Paragraph: "Scarface",
    id: crypto.randomUUID(),
  },
  {
    Title: "I'm gonna make him an offer he can't refuse.",
    Paragraph: "The Godfather",
    id: crypto.randomUUID(),
  },
  {
    Title: "May the force be with you.",
    Paragraph: "Star Wars: A New Hope",
    id: crypto.randomUUID(),
  },
  {
    Title: "Bond. James Bond.",
    Paragraph: "James Bond: Dr. No",
    id: crypto.randomUUID(),
  },
  {
    Title: "You're gonna need a bigger boat.",
    Paragraph: "Jaws",
    id: crypto.randomUUID(),
  },
  {
    Title: "I'll be back.",
    Paragraph: "Terrminator",
    id: crypto.randomUUID(),
  },
  {
    Title: "Run Forest, RUN!",
    Paragraph: "Forest Gump",
    id: crypto.randomUUID(),
  },
  {
    Title: "Houston, we have a problem",
    Paragraph: "Apollo 13",
    id: crypto.randomUUID(),
  },
  {
    Title: "You've got to ask yourself a question: 'do I feel lucky?' Well, do ya, punk?",
    Paragraph: "Dirty Harry",
    id: crypto.randomUUID(),
  },
  {
    Title: "Keep your friends close, and your enemies closer.",
    Paragraph: "The Godfather pt. II",
    id: crypto.randomUUID(),
  },
  {
    Title: "Hasta la vista baby.",
    Paragraph: "Terrminator pt. II",
    id: crypto.randomUUID(),
  },
  {
    Title: "My precious",
    Paragraph: "Lord of the Rings: Fellowship of the Ring",
    id: crypto.randomUUID(),
  },
  {
    Title: "A martini. Shaken not stirred",
    Paragraph: "Goldenfinger",
    id: crypto.randomUUID(),
  },
  {
    Title: "I feel the need, the need for speed!",
    Paragraph: "Top Gun",
    id: crypto.randomUUID(),
  },
  {
    Title: "If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you.",
    Paragraph: "Taken",
    id: crypto.randomUUID(),
  },
  {
    Title: "Help me, Obi-Wan Kenobi. You’re my only hope.",
    Paragraph: "Star Wars: A new Hope",
    id: crypto.randomUUID(),
  },
  {
    Title: "Oh, and in case I don't see ya, good afternoon, good evening, and good night.",
    Paragraph: "The Truman Show",
    id: crypto.randomUUID(),
  },
  {
    Title: "Hanging around, hanging around. Kid's got alligater blood.",
    Paragraph: "Rounders",
    id: crypto.randomUUID(),
  },
  {
    Title: "All night he check, check check.",
    Paragraph: "Rounders",
    id: crypto.randomUUID(),
  },
  {
    Title: "You shall not pass!",
    Paragraph: "Lord of the Rings: Fellowship of the Ring",
    id: crypto.randomUUID(),
  },
  {
    Title: "Snakes, why'd it have to be snakes.",
    Paragraph: "Indiana Jones: Raiders of the Lost Ark",
    id: crypto.randomUUID(),
  },
  {
    Title: "I once saw him kill three men in a bar with a pencil. A f***ing pencil.",
    Paragraph: "John Wick",
    id: crypto.randomUUID(),
  },
  ];
  let QuotesMade = [];
  
function MovieQuotes() 
{
  const [Mainquotes, setMainQuotes] = useState([]);
  const [Initalquotes, setInitalquotes] = useState(initialQuotes);
  const [inputQuoteText, setInputQuoteText] = useState("");
  const [inputMovieText, setInputMovieText] = useState("");
  
  function AddQuote()
  {
    const whichQuote = Math.floor(Math.random() * Initalquotes.length);
    let issame = false;

    if(QuotesMade.length !== Initalquotes.length)
    {
      QuotesMade.map((quote) => 
      {
        if(whichQuote === quote)
        {
          issame = true;
        }
      })
      if(issame === false)
      {
        setMainQuotes([...Mainquotes, Initalquotes[whichQuote]])
        QuotesMade.push(whichQuote);
      } else
      {
        AddQuote();
      }
    } else
    {
      return(
        setMainQuotes([...Mainquotes, 
          {
            Title: "That's all folks!",
            Paragraph: "You can add your own through the bar at the top!", 
            id: crypto.randomUUID(),
          }
        ])
      );
    }
  }

  function ClearScreen()
  {
    setMainQuotes([""]);
    QuotesMade = [];
  }

  function SaveQuoteText(event)
  {
    setInputQuoteText(event.target.value);
  }

  function SaveMovieText(event)
  {
    setInputMovieText(event.target.value);
  }

  function CreateQuote()
  {
    setInitalquotes([...Initalquotes,
      {
        Title: inputQuoteText,
        Paragraph: inputMovieText,
        id: crypto.randomUUID(),
      }
    ])
      setInputMovieText("");
      setInputQuoteText("");
  }

  return(
    <>
      <div className="Nav">
        <button onClick={AddQuote}>New Quote</button>
        <button onClick={ClearScreen}>Clear</button>
        <input type="search" placeholder="Add Your Quote Here!" onChange={SaveQuoteText} value={inputQuoteText}></input>
        <input type="search" placeholder="The Movie Your Quote is From" size="28" onChange={SaveMovieText} value={inputMovieText}></input>
        <button onClick={CreateQuote}>Submit Your Quote</button>
      </div>
      {Mainquotes.map((quote) => (
        <Quote 
          Title={quote.Title}
          Paragraph={quote.Paragraph}
          key={quote.id}
        />
      ))}
    </>
  )
}

export default MovieQuotes