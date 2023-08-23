const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full text-slate-200 p-10">
            <p>
                Anna Tasheva <span>{new Date().getFullYear()}</span>
            </p>
        </footer>
    );
};

export default Footer;
