function addTodo() {
      const input = document.getElementById('todo-input');
      const text = input.value;

      if (text === "") {
        alert("Please enter a todo.");
        return;
      }

      const todoDiv = document.createElement('div');
      todoDiv.className = "todo-item";

      const para = document.createElement('p');
      para.textContent = text;
      

      const deletebutton=document.createElement('button');
      deletebutton.innerHTML="Delete";
      deletebutton.className="deletebtn";
      deletebutton.onclick=function(){
        todoDiv.remove();
      };
      
      todoDiv.appendChild(para);
      todoDiv.appendChild(deletebutton);


     document.getElementById('todo-list').appendChild(todoDiv);

      input.value="";
    }
