const theme = document.querySelector("#theme");
        const body = document.querySelector("body");

        theme.addEventListener("click", () => {
          if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            body.classList.add("light");
          } else {
            body.classList.remove("light");
            body.classList.add("dark");
          }
        });

        function editText(event) {
          var buttonId = event.target.id;

          buttonId = '.' + buttonId;

          var editableText = document.querySelector(buttonId);
        
          editableText.contentEditable = true;
        
          editableText.focus();
        }

        

      