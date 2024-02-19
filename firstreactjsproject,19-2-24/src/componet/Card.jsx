import React from 'react';

const Card = ({ Data }) => {
    return (
        <>
            {
                Data.map((value, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div class="row offset-1">
                                <div class="col-md-5 testimonals">
                                    <p>{value.description}</p>
                                    <img src={value.img} alt=""/>
                                    <p class="user-details">
                                        <b>{value.Name}</b><br />{value.post}
                                    </p>
                                </div>
                            </div>

                        </React.Fragment>
                    )
                })
            }

        </>
    )
}

export default Card