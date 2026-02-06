import { Container, Row } from "react-bootstrap"
import { CustomHeader } from "../../shared"
import { CustomFooter } from "../../shared/components/customFooter"
import { SelectImageLine } from "../components"

import TestImages from '../../images/BresciaLogoCumarubg.png'


export const HomePage = () => {

    const handleImageClick = () => {
        alert('clicado')
    }

    return (
        <div>
            <CustomHeader />
            <Container className="d-flex flex-column ContainerProducts">
                <section className="mt-5 playfar text-center">
                    <h1 className="dimobiliColor">
                        Conheça nossas linhas
                    </h1>
                    <h3>
                        Toque no ambiente desejado e confira o carrossel a baixo
                    </h3>
                    <Row className="mb-5 mt-5 d-flex justify-content-around">
                        <SelectImageLine
                            src={TestImages}
                            alt="Planejados"
                            text="Móveis planejados"
                            onClick={handleImageClick}
                        />
                        <SelectImageLine
                            src={TestImages}
                            alt="Planejados"
                            text="Móveis planejados"
                            onClick={handleImageClick}
                        />
                    </Row>
                </section>
            </Container>
            <CustomFooter />
        </div>
    )

}