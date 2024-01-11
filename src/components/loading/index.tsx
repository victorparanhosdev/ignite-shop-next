
import { RotatingLines } from "react-loader-spinner"
import styled from './loading.module.css'


export function Loading() {
    return (
        <div className={styled.loading}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}