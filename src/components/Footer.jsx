const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full text-slate-200 pb-4 pt-5">
            <p className="text-gradient">
                <span className="pr-1">Anna Tasheva</span> &bull;{" "}
                <span className="pl-1">{new Date().getFullYear()}</span>
            </p>
        </footer>
    );
};

export default Footer;
