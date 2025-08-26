import React from 'react'

const PageTitle = ({ title }) => {
    return (
        <h1 className="ps_title">
            {
                /* Multi-line title with gradient span */
                title && title?.length > 0 && title?.map((t, idx) => {
                    return <>
                        <span className={t.highlight ? "pst_gradient" : "pst_regular"}>{t?.text}</span> {idx !== title.length - 1 && <br />}
                    </>
                })

            }

        </h1>
    )
}

export default PageTitle