$(document).ready(function () {
  if (window.location.href.indexOf("index") > -1) {
    $(".bxslider").bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: 1200,
      mode: "fade",
    });

    function formatDate(date, format) {
      const day = function addzero(b = false) {
        let strdate;
        if (b) {
          strdate = `${date.getMonth() + 1}`;
        } else {
          strdate = `${date.getDate()}`;
        }
        if (strdate.length == 1) {
          return "0" + strdate;
        } else {
          alert(strdate.length);
          return strdate;
        }
      };
      const map = {
        dd: day(),
        mm: day(true),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear(),
      };

      return format.replace(/dd|mm|yy|yyy/gi, (matched) => map[matched]);
    }

    const post = [
      {
        title: "Prueba de título 1",
        date: formatDate(new Date(), "dd/mm/yy"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore," +
          "eos nobis? Quas unde illum exercitationem. Omnis tempora laborum," +
          "similique quo ipsum consequuntur exercitationem dolores nam!" +
          "Dolorem fuga tempore quibusdam magnam?",
      },
      {
        title: "Prueba de título 2",
        date: formatDate(new Date(), "dd/mm/yy"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore," +
          "eos nobis? Quas unde illum exercitationem. Omnis tempora laborum," +
          "similique quo ipsum consequuntur exercitationem dolores nam!" +
          "Dolorem fuga tempore quibusdam magnam?",
      },
      {
        title: "Prueba de título 3",
        date: formatDate(new Date(), "dd/mm/yy"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore," +
          "eos nobis? Quas unde illum exercitationem. Omnis tempora laborum," +
          "similique quo ipsum consequuntur exercitationem dolores nam!" +
          "Dolorem fuga tempore quibusdam magnam?",
      },
      {
        title: "Prueba de título 4",
        date: formatDate(new Date(), "dd/mm/yy"),
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore," +
          "eos nobis? Quas unde illum exercitationem. Omnis tempora laborum," +
          "similique quo ipsum consequuntur exercitationem dolores nam!" +
          "Dolorem fuga tempore quibusdam magnam?",
      },
    ];

    post.forEach((element, index) => {
      const posts = `<article class="post">
    <h2>${element.title}</h2>
    <span class="date">${element.date}</span>
    <p>
    ${element.content}
    </p>
    <button class="btn-more"><a href="#">Leer más</a></button>
  </article>`;
      $(".posts").append(posts);
    });
  }

  if (window.location.href.indexOf("about") > -1) {
    $("#accordion").accordion();
  }

  let styles = $("#themes");
  let mode = localStorage.getItem("color");
  if (mode == null) mode = "";
  styles.attr("href", mode);

  $(".dark-mode").click(function (e) {
    let dark = "css/dark.css";
    styles.attr("href", dark);
    localStorage.setItem("color", dark);
  });

  $(".light-mode").click(function () {
    let light = "";
    styles.attr("href", light);
    localStorage.setItem("color", light);
  });

  $(".start").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  $(".login form").submit(function () {
    const form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

  const form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != undefined) {
    const about = $(".about p");
    about.html("<br/><strong>Bienvenido " + form_name + "</strong>");
    about.append('<a href="#" id="logout">Cerrar Sesión</a>');
    $(".login").hide();

    $("#logout").click(function () {
      localStorage.removeItem("form_name");
      location.assign("index.html");
    });
  }
});
