import React from 'react'

export default function Card({fotos, styles, favorito, open}) {
  return (
    <ul className={styles.galeria__cards}>
        {fotos.map((foto) => {
          return (
            <li key={foto.id} className={styles.galeria__card} >
              <img 
                className={styles.galeria__imagem}
                src={foto.imagem} 
                alt={foto.titulo} 
              />
              <p className={styles.galeria__descricao}>{foto.titulo}</p>
              <div>
                <p>{foto.creditos}</p>
                <span>
                  <img src={favorito} alt="icone de coração de curtir" />
                  <img src={open} alt="icone de abrir modal" />
                </span>
              </div> 
            </li>
          )
        })}
      </ul>
  )
}
