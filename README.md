<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdul Wahab - Academic Profile</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
            background-color: #f8f9fa;
            color: #333;
            line-height: 1.6;
            padding: 20px;
            max-width: 900px;
            margin: 0 auto;
        }
        header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #e9ecef;
        }
        h1 {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 5px;
        }
        .title-info {
            font-size: 1.1rem;
            color: #7f8c8d;
            margin-bottom: 20px;
        }
        .contact-links {
            margin-top: 15px;
        }
        .contact-links a {
            margin: 0 10px;
            color: #3498db;
            text-decoration: none;
            font-weight: 500;
        }
        .contact-links a:hover {
            text-decoration: underline;
        }
        section {
            background-color: white;
            border-radius: 8px;
            padding: 25px;
            margin-bottom: 25px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        h2 {
            color: #2c3e50;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 1px solid #eee;
        }
        .news-item, .publication {
            margin-bottom: 15px;
            padding-left: 10px;
            border-left: 3px solid #3498db;
            padding-bottom: 15px;
        }
        .news-date {
            font-weight: bold;
            color: #2980b9;
        }
        .news-content, .pub-title {
            font-weight: 600;
            color: #2c3e50;
            margin: 5px 0;
        }
        .pub-authors, .pub-venue {
            color: #555;
            font-size: 0.95rem;
        }
        .pub-venue {
            font-style: italic;
            margin-top: 3px;
        }
        .pub-abstract {
            background-color: #f8f9fa;
            padding: 12px;
            border-radius: 5px;
            margin-top: 10px;
            font-size: 0.95rem;
            color: #444;
        }
        .links {
            margin-top: 5px;
        }
        .links a {
            color: #27ae60;
            text-decoration: none;
            margin-right: 15px;
            font-size: 0.9rem;
        }
        .links a:hover {
            text-decoration: underline;
        }
        footer {
            text-align: center;
            margin-top: 30px;
            color: #95a5a6;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Abdul Wahab</h1>
        <p class="title-info">
            I am a Ph.D. student in Electrical and Computer Engineering at Ontario Tech University and a member of the RTEMSOFT Lab. I am very fortunate to be advised by Prof. Akramul Azim.
        </p>
        <p class="title-info">
            I received a master’s degree in Computer Science from COMSATS University Islamabad, where I completed my thesis under the supervision of Dr. Tehseen Zia. Before that, I completed my bachelor’s degree from the International Islamic University Islamabad.
        </p>
        <div class="contact-links">
            <a href="mailto:example@ontariotechu.net">Email</a> |
            <a href="#" target="_blank">Scholar</a> |
            <a href="#" target="_blank">Github</a> |
            <a href="#" target="_blank">Linkedin</a>
        </div>
    </header>

    <main>
        <section id="news">
            <h2>News</h2>
            <div class="news-item">
                <div class="news-date">[06/2024]</div>
                <div class="news-content">
                    Our paper "Latent fingerprint enhancement for accurate minutiae detection" has been accepted in KES 2024.
                </div>
            </div>
            <div class="news-item">
                <div class="news-date">[05/2024]</div>
                <div class="news-content">
                    Accepted a Ph.D. offer at Ontario Tech University. Thank you to Prof. Akramul Azim for his support all along.
                </div>
            </div>
        </section>

        <section id="research">
            <h2>Research</h2>
            <p>
                I am interested in deep learning and embedded systems, specifically in exploring methods for accelerating the training of deep neural networks.
                I am happy to collaborate and answer questions about my research, feel free to send me an email.
            </p>

            <div class="publication">
                <div class="pub-title">Visual attribution using Adversarial Latent Transformations</div>
                <div class="pub-authors">Tehseen Zia, Abdul Wahab, David Windridge, Santosh Tirunagari, Nauman Bashir Bhatti</div>
                <div class="pub-venue">Computers in Biology and Medicine, 2023</div>
                <div class="links">
                    <a href="#" target="_blank">Paper</a>
                </div>
                <div class="pub-abstract">
                    <strong>Abstract:</strong> VA2LT modifies discrepancies in the latent space to better capture relevant features for visual attribution without data biases or inefficient pixel-level solutions.
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>© 2024 Abdul Wahab. Last updated: August 2024</p>
    </footer>
</body>
</html>
