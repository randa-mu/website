import React, {useMemo, useRef} from "react"
import {useFrame} from "@react-three/fiber"
import {BoxGeometry, CanvasTexture, EdgesGeometry, LineBasicMaterial} from "three"

export function Dice() {
    const meshRef = useRef<any>()

    const cubeSize = 3

    useFrame(() => {
        if (!!meshRef.current) {
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.01
        }
    })

    const text = "μ"
    const canvas = useMemo(() => {
        return TextCanvas({
            text, backgroundColor: "black", textColor: "white"
        })
    }, [])

    return (
        <>
            <ambientLight/>
            <mesh ref={meshRef}>
                <boxGeometry args={[cubeSize, cubeSize, cubeSize]}/>
                <meshBasicMaterial map={new CanvasTexture(canvas)}/>
                <lineSegments
                    args={[new EdgesGeometry(new BoxGeometry(cubeSize, cubeSize, cubeSize)), new LineBasicMaterial({color: "white"})]}/>
            </mesh>
        </>
    )
}

type TextCanvasProps = { text: string, backgroundColor: string, textColor: string }

function TextCanvas({text, backgroundColor, textColor}: TextCanvasProps): HTMLCanvasElement {
    const size = 128

    const canvas = document.createElement("canvas")
    canvas.height = size
    canvas.width = size
    const context = canvas.getContext("2d")!

    context.fillStyle = backgroundColor
    context.fillRect(0, 0, size, size)

    context.fillStyle = textColor
    context.font = "24px Highway Gothic"
    context.textAlign = "center"
    context.textBaseline = "middle"

    context.fillText(text, size / 2, size / 2)

    return canvas
}
