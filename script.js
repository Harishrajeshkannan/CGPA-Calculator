function generateOnClick()
{
    if(parseInt(document.querySelector("#sem_count").value)>0)
    {
        var noOfSemBox=parseInt(document.querySelector("#sem_count").value);
        createSemCont(noOfSemBox);
    }
    else
    {
        alert("Please enter a valid input");
    }
}

function createSemCont(n)
{
    document.querySelector("#semesters-container").style.visibility="visible";
    for(var i=0;i<n-1;i++)
    {
        let org_sem_cont=document.querySelector(".sem_boxes");
        let dup_sem_cont=org_sem_cont.cloneNode(true);
        dup_sem_cont.querySelector("#head").innerHTML="Sem "+(i+2);
        document.querySelector("#semesters-container").appendChild(dup_sem_cont);
    }
    var button=document.createElement("button");
    button.innerHTML=`Calculate`;
    button.classList.add("calculateButton");
    button.addEventListener("click",calculateCGPA);
    document.querySelector("#semesters-container").appendChild(button);
}

function calculateCGPA()
{
    var totalCredits=0;
    var total=0;
    var sems=document.getElementsByClassName("sem_boxes");
    for(var i=0;i<sems.length;i++)
    {
        var credit=parseInt(sems[i].querySelector(".credits input").value);
        var gpa=parseInt(sems[i].querySelector(".GPA input").value);
        totalCredits+=credit;
        total+=credit*gpa;
    }
    alert("Your CGPA is "+parseFloat((total/totalCredits).toFixed(3)));
}

document.querySelector("#calc button").addEventListener("click",generateOnClick);