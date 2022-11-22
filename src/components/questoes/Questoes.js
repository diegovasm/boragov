import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Spinner, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Questoes.css"

export default function Questoes ({apiUrl}){

    const [questoes, setQuestoes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            const fetchQuestoes = async () => {
                const response = await axios.get(apiUrl)
                setQuestoes(response.data)
                setIsLoading(false)
            }

            fetchQuestoes()

        } catch (error) {

            console.log(error)
        }
    }, [apiUrl])

    const renderQuestoes = questoes.map((questao)=> {
        const renderTags = questao.tags.map((item, index) => {
            return (
                <span  id={index}>{`${item} `}</span>
            )
        })
        return (
            <Link to={`/detalhes/${questao._id}`} >
                <div className="item-questao" id={questao._id}>
                    <div className="indicadores-questao">
                        <p>{questao.votos} votos</p>
                        <p>{questao.respostas} respostas</p>
                        <p>{questao.views} visualizações</p>
                    </div>
                    <div className="resumo-questao">
                        <h3>{questao.titulo}</h3>
                        <p className="tags"> {renderTags} </p>
                    </div>
                </div>
            </Link>
           
        )
    })

    return (
        <Container>
            {isLoading && <Spinner className="mt-4" animation="border" />}
            {!isLoading &&
                <div>
                    {renderQuestoes}
                </div>
            }
        </Container>

    )

}