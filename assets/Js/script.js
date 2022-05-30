
        // toggle navbar
        const btn = document.getElementById('menu-toggle')
        const menu = document.querySelector('.nav-link ul')

        btn.addEventListener('click', function () {
            menu.classList.toggle('toggle')
            btn.classList.toggle('rotate')
        })

        // Button Up
        window.onscroll = function () {
            upScroll()
        }

        function upScroll() {
            if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
                document.getElementById("button-up").style.display = "block";
                document.getElementById("button-up").fadeIn();
            } else {
                document.getElementById("button-up").style.display = "none";
                document.getElementById("button-up").fadeOut()
            }
        }

        function upButton() {
            document.documentElement.scrollTop = 0;
        }