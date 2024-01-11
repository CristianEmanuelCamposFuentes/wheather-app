export default function Footer() {
    return (
        <footer className="bg-light">
            <div className="container-fluid bg-dark text-white text-center">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Acerca de</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel pulvinar lectus.</p>
                    </div>
                    <div className="col-md-4">
                        <h2>Enlaces útiles</h2>
                        <ul className="list-unstyled">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/about">Acerca de</a></li>
                            <li><a href="/contact">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2>Contacto</h2>
                        <p><i className="fas fa-phone"></i> +1 123 456 7890</p>
                        <p><i className="fas fa-envelope"></i> info@example.com</p>
                        <p><i className="fas fa-map-marker-alt"></i> 123 Calle Principal, Bell Ville, Argentina</p>
                    </div>
                </div>
                <div className="container-fluid copyrights">
                    <p>&copy; 2024 Weather App. Todos los derechos reservados.</p>
                </div>
            </div>

        </footer>
    );
}
