import { useState } from 'react'
import './FormCalculadora.css'

function FormCalculadora() {

    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [operacao, setOperacao] = useState('+')
    const [resultado, setResultado] = useState('')

    function calcular(e) {
        e.preventDefault()

        let n1 = Number(numero1)
        let n2 = Number(numero2)
        let valor

        if (operacao === '+') {
            valor = n1 + n2
        }

        if (operacao === '-') {
            valor = n1 - n2
        }

        if (operacao === '*') {
            valor = n1 * n2
        }

        if (operacao === '/') {
            valor = n1 / n2
        }

        setResultado(valor)
    }

    function limpar() {
        setNumero1('')
        setNumero2('')
        setOperacao('+')
        setResultado('')
    }

    return (
        <div className="calculadora">

            <form onSubmit={calcular}>

                <input
                    type="number"
                    placeholder="Primeiro número"
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Segundo número"
                    value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}
                />

                <select
                    value={operacao}
                    onChange={(e) => setOperacao(e.target.value)}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>

                <button type="submit">Calcular</button>

                <button type="button" onClick={limpar}>
                    Limpar
                </button>

            </form>

            <h2>Resultado: {resultado}</h2>

        </div>
    )
}

export default FormCalculadora