const Loading = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="text-light">Cargando...</h1>
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;