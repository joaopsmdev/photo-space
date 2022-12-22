import Cabecalho from "Components/Cabecalho"
import Galeria from "Components/Galeria"
import Menu from "Components/Menu"
import Populares from "Components/Populares"
import Rodape from "Components/Rodape"
import banner from "./banner.png"
import styles from "./PaginaInicial.module.scss"

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1>
                            Galeria de fotos do espaço!
                        </h1>
                        <img src={banner} alt="Imagem da terra tirada do espaço" />
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}