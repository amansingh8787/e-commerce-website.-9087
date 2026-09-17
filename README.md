# amansingh.1012
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Aman | Personal Portfolio</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            line-height: 1.6;
        }

        /* NAVBAR */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 20px 8%;
            background: rgba(15, 23, 42, 0.95);
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
        }

        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #38bdf8;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 30px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            transition: 0.3s;
        }

        nav ul li a:hover {
            color: #38bdf8;
        }

        /* HOME */
        #home {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 100px 20px 50px;
        }

        .hero h1 {
            font-size: 60px;
            margin-bottom: 10px;
        }

        .hero h1 span {
            color: #38bdf8;
        }

        .hero h2 {
            font-size: 28px;
            color: #94a3b8;
            margin-bottom: 20px;
        }

        .hero p {
            max-width: 650px;
            margin: auto;
            color: #cbd5e1;
        }

        .btn {
            display: inline-block;
            margin-top: 30px;
            padding: 13px 30px;
            background: #38bdf8;
            color: #0f172a;
            text-decoration: none;
            border-radius: 30px;
            font-weight: bold;
            transition: 0.3s;
        }

        .btn:hover {
            transform: scale(1.08);
        }

        /* SECTIONS */
        section {
            padding: 100px 8%;
        }

        .title {
            text-align: center;
            font-size: 40px;
            margin-bottom: 50px;
            color: #38bdf8;
        }

        /* ABOUT */
        .about {
            max-width: 850px;
            margin: auto;
            text-align: center;
        }

        .about p {
            color: #cbd5e1;
            font-size: 18px;
        }

        /* SKILLS */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
        }

        .skill {
            background: #1e293b;
            padding: 30px;
            text-align: center;
            border-radius: 15px;
            transition: 0.3s;
        }

        .skill:hover {
            transform: translateY(-10px);
            background: #334155;
        }

        .skill h3 {
            color: #38bdf8;
            margin-bottom: 10px;
        }

        /* PROJECTS */
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
        }

        .project {
            background: #1e293b;
            padding: 30px;
            border-radius: 15px;
            transition: 0.3s;
        }

        .project:hover {
            transform: translateY(-10px);
        }

        .project h3 {
            color: #38bdf8;
            margin-bottom: 15px;
        }

        .project p {
            color: #cbd5e1;
        }

        /* CONTACT */
        .contact {
            text-align: center;
        }

        .contact p {
            margin: 10px;
            color: #cbd5e1;
        }

        /* FOOTER */
        footer {
            text-align: center;
            padding: 25px;
            background: #020617;
            color: #94a3b8;
        }

        /* MOBILE */
        @media (max-width: 700px) {

            nav {
                padding: 15px 5%;
            }

            nav ul {
                gap: 12px;
                font-size: 13px;
            }

            .hero h1 {
                font-size: 42px;
            }

            .hero h2 {
                font-size: 22px;
            }

            section {
                padding: 80px 5%;
            }
        }
    </style>
</head>

<body>

    <!-- NAVBAR -->
    <nav>
        <div class="logo">AMAN.</div>

        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>


    <!-- HOME -->
    <section id="home">

        <div class="hero">

            <h1>Hi, I'm <span>Aman</span> 👋</h1>

            <h2>Web Developer & Python Learner</h2>

            <p>
                Welcome to my personal website.
                I am passionate about technology, programming,
                web development and learning new things.
            </p>

            <a href="#projects" class="btn">
                View My Projects
            </a>

        </div>

    </section>


    <!-- ABOUT -->
    <section id="about">

        <h2 class="title">About Me</h2>

        <div class="about">

            <p>
                Hello! My name is Aman.
                I am interested in programming and technology.
                I am currently learning HTML, CSS, JavaScript
                and Python.
            </p>

            <br>

            <p>
                My goal is to improve my programming skills,
                create useful projects and become a professional
                developer.
            </p>

        </div>

    </section>


    <!-- SKILLS -->
    <section id="skills">

        <h2 class="title">My Skills</h2>

        <div class="skills-container">

            <div class="skill">
                <h3>HTML</h3>
                <p>Web Structure</p>
            </div>

            <div class="skill">
                <h3>CSS</h3>
                <p>Web Design</p>
            </div>

            <div class="skill">
                <h3>JavaScript</h3>
                <p>Web Interactivity</p>
            </div>

            <div class="skill">
                <h3>Python</h3>
                <p>Programming</p>
            </div>

            <div class="skill">
                <h3>GitHub</h3>
                <p>Version Control</p>
            </div>

        </div>

    </section>


    <!-- PROJECTS -->
    <section id="projects">

        <h2 class="title">My Projects</h2>

        <div class="projects">

            <div class="project">
                <h3>🌐 Personal Website</h3>
                <p>
                    My personal portfolio website created
                    using HTML and CSS.
                </p>
            </div>

            <div class="project">
                <h3>🧮 Python Calculator</h3>
                <p>
                    A simple calculator project created
                    using Python.
                </p>
            </div>

            <div class="project">
                <h3>📱 QR Code Generator</h3>
                <p>
                    A Python project that generates QR codes.
                </p>
            </div>

            <div class="project">
                <h3>✋ Hand Detection</h3>
                <p>
                    A computer vision project for detecting
                    hand and finger gestures.
                </p>
            </div>

        </div>

    </section>


    <!-- CONTACT -->
    <section id="contact">

        <h2 class="title">Contact Me</h2>

        <div class="contact">

            <p>📧 Email: your-email@gmail.com</p>

            <p>💻 GitHub: github.com/yourusername</p>

            <p>📍 India</p>

            <a href="mailto:your-email@gmail.com" class="btn">
                Send Me an Email
            </a>

        </div>

    </section>


    <!-- FOOTER -->
    <footer>

        <p>
            © 2026 Aman. All Rights Reserved.
        </p>

    </footer>

</body>
</html>
