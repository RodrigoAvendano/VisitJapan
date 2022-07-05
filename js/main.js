$(document).ready(function () {
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
});
