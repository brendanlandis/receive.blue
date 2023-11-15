export default function Header() {
    return (
        <>
            <div className="logo">
                <img src="/logo.png" alt="Receive logo" />
            </div>
            <div className="image">
                <img
                    src="/header-mobile.jpg"
                    className="header-mobile"
                    alt="receive live at hart bar"
                />
                <img
                    src="/header-desktop.jpg"
                    className="header-desktop"
                    alt="receive live at hart bar"
                />
            </div>
        </>
    );
}
