document.addEventListener("DOMContentLoaded", function() {
    
    var connectionRequestsBadge = document.querySelector('.card-header .badge');
    var connectionRequestsList = document.querySelectorAll('.card-list-item');
    var yourConnectionsBadge = document.querySelectorAll('.card-header .badge')[1];
    
     var editProfileBtn = document.querySelector('.editar');
     var userName = document.querySelector('.nameh1');
     

     editProfileBtn.addEventListener('click', editar );

    function editar() {
        var newName = "Dalma E";
        userName.textContent = newName;
        
    }

    function removeConnectionRequest(event) {
        //event.target.closest('.card-list-item').remove();
        var listItem = event.target.closest('.card-list-item');
        listItem.remove();
        updateConnectionRequestsBadge();
    }
    
    function updateConnectionRequestsBadge() {
        connectionRequestsBadge.textContent = parseInt(connectionRequestsBadge.textContent) - 1;
    }

    function acceptConnection(event) {
        var listItem = event.target.closest('.card-list-item');
        listItem.remove();
        yourConnectionsBadge.textContent = parseInt(yourConnectionsBadge.textContent) + 1;
        updateConnectionRequestsBadge();
    }

    connectionRequestsList.forEach(function(item) {
       
        item.querySelector('.icon-close').addEventListener('click', removeConnectionRequest);
        item.querySelector('.icon-accept').addEventListener('click', acceptConnection);
    });

   
});
