let companies = [
    {id : 1, name: "Amazon", sales: 3000},
    {id : 2, name: "BestBuy", sales: 2000},
    {id : 3, name: "Meijer", sales: 4000},
    {id : 4, name: "Kroger", sales: 7000},
    {id : 5, name: "Walmart", sales: 9000},
    {id : 6, name: "P&G", sales: 90000},



];


const company = () => {
   var tbody = document.getElementById ("tbody")
   tbody.innerHTML = "" ;  
    for (let com of companies) {
        let tr = "<tr>";
        tr += `<td>${com.id}</td>`;
        tr += `<td>${com.name}</td>`;
        tr += `<td>${com.sales}</td>`;
        tr += "<tr>"
        tbody.innerHTML += tr;
    }
  
 
  


}