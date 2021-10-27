import React from 'react'

export default function Alert(props) {

    if (props.message !== null) {
        return (
            <div>
                <div class="alert alert-primary" role="alert">
                    <strong>{props.message}</strong>
                </div>
            </div>
        )
    } return null

}
