export default function Content({children}) {
    return (
        <>
            <div className="container">
                {children}
            </div>
            <hr />
            <footer>&copy;2021 TestSite</footer>
        </>
    )
}