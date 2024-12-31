import { Sidebar } from "./components/sidebar/indexSBD"
import { TwitterForm } from "./components/TwitterForm/indexTF"
import { Tweet } from "./components/Tweet/indexTW"
import { v4 } from "uuid"
import { getAvatar, getRandomImage } from "./utils/gerarImagens"
import { useEffect, useState } from "react"

function App() {

  const [tweets, setTweets] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweets()
    }, 20000);
    return () => clearInterval(interval)
  }, [])

  const addNewRandomTweets =() => {
    const randomTweets = [
      'Acabei de entrar no clone do Twitter! Estou animado para me conectar com todos aqui. 👋 #NovoUsuário',
      'Caralhoooooo!!!! O Vasco da Gama está praticando muito futebol essa noite em São Januário, EU VOU GOZAAAARRRR!!!! VAAAMOOO #5X0VASCAO',
      'O Vasco da Gama acaba de assumir a liderança do Brasileirão 2025 e vai rumo ao titulo #PENTADOVASCO',
      'VITOOOOOOORIA de GABRIEL BORTOLETO em INTERLAGOS, a bordo de uma SAUBER Bortoleto fez a maior corrida de um piloto na F1 #BORBOLETOÉREI #F1NABAND',
      'É CAMPEÃO, o VASCO DA GAMA ACABA DE SE TORNAR PENTA CAMPEÃO BRASILEIRO DE FUTEBOL #VASCOOOOO',
      ]

      const randomTweet = randomTweets[Math.floor(Math.random() * randomTweets.length)]

      addNewTweet(randomTweet, Math.random() > 0.7 )

  }

  const addNewTweet = (content, includeImage = false) => {
    const NewTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)}@email.com`),
      content, 
      time: new Date().toLocaleDateString([],
        {
          hour: '2-digit',
          minute: '2-digit'
        }),
        image: includeImage ? getRandomImage() : null,
        likes: 0,
        retweets: 0,
        comments: 0
    }

    setTweets( (prevTweets) => [NewTweet, ...prevTweets] )
  }

  return (
    <>
      <div className="flex mx-auto max-w-7xl">
        <Sidebar />
        <main className="flex-grow border-l border-r border-gray-700 max-w-xl">
        <header className="sticky top-0 z-10 bg-twitter-background bg-opcacity-80 backdrop-blur-sm">
          <h2 className="px-4 py-3 text-xl font-bold">For You</h2>
        </header>
        <TwitterForm onTweet = {(content) => addNewTweet(content, Math.random() > 0.6)}/>
        <div>
          {tweets.map(tweet => (
            <Tweet key={tweets.id} tweet={tweet}/>
          ))}
        </div>
      </main>
      </div>
    </>
  )
}

export default App
