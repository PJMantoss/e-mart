import React from 'react';

const Footer = () => {
  return (
    <div>
        <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer-column">
                    <ul class="nav flex-column">
                    <li class="nav-item">
                        <span class="footer-title">Product</span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Product 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Product 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Plans & Prices</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Frequently asked questions</a>
                    </li>
                    </ul>
                </div>
                <div class="col-md-4 footer-column">
                    <ul class="nav flex-column">
                    <li class="nav-item">
                        <span class="footer-title">Company</span>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Job postings</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News and articles</a>
                    </li>
                    </ul>
                </div>
                <div class="col-md-4 footer-column">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <span class="footer-title">Contact & Support</span>
                        </li>
                        <li class="nav-item">
                            <span class="nav-link"><i class="fa fa-phone" aria-hidden="true"></i> +47 45 80 80 80</span>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-comments" aria-hidden="true"></i> Live chat</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i> Contact us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-star" aria-hidden="true"></i> Give feedback</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="text-center">
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
            
            <div class="row text-center">
            <div class="col-md-4 box">
                <span class="copyright quick-links">Copyright &copy; e-mart <script>document.write(new Date().getFullYear())</script>
                </span>
            </div>
            <div class="col-md-4 box">
                <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                        <a href="https://twitter.com/pjmantoss" target="_blank">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://github.com/PJMantoss" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="https://www.linkedin.com/in/pj-mantoss-55a372a3/" target="_blank">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-4 box">
                <ul class="list-inline quick-links">
                <li class="list-inline-item">
                    <a href="#">Privacy Policy</a>
                </li>
                <li class="list-inline-item">
                    <a href="#">Terms of Use</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </footer>
    </div>
  )
}

export default Footer;