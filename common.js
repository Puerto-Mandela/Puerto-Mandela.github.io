      function animate_text()
      {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ()[]{},;.:/?!§$%*+-";
        var text = $("#info-k").html();
        var new_text = "";
        for (var i = 0; i < text.length; i++)
        {
          var new_char = text[i];
          //find char pos
          var pos = 0;
          for (var k = 0; k < alphabet.length; k++)
          {
            if (alphabet[k] == new_char)
            {
              pos = (k + i + 1) % alphabet.length;
              break;
            }
          }
          new_text += alphabet[pos];
        }
        var text = $("#info-k").html(new_text);
      }

      $(document).ready( function()
      {
        setInterval(animate_text, 40);
      });
