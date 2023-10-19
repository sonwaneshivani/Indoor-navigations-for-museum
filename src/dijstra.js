// A Javascript program for Dijkstra's single
var count=0;
var source_id=""
var destination_id=""
var source_style=""
var destination_style=""
var paths=[]

function number(event)
{
    console.log(event.target.id)
    if(count===0)
    {
        
        event.target.style.fill="Red"
        source_id=event.target.id
        
        count++
        document.getElementById("source").innerHTML="Source:"+source_id
    }

    else if(count===1)
    {
        console.log(count)
        event.target.style.fill="Green"
        destination_id=event.target.id
        count++
        document.getElementById("destination").innerHTML="Destination: "+destination_id
    }

    else if(count>=2)
    {
        alert("Source and Destination Picked. Please Click Compute or Reset")
    }
}

function ReverseString(str) {
      
    // Check input
    if(!str || str.length < 2 ||
            typeof str!== 'string') {
        return 'Not valid';
    }
      
    // Take empty array revArray
    const revArray = [];
    const length = str.length - 1;
      
    // Looping from the end
    for(let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
      
    // Joining the array elements
    return revArray.join('');
}

function reverseDateString(dateString) {
  const dateArray = dateString.split("-"); // split the string at the delimiter "-"
  return dateArray.reverse().join("-"); // reverse the array and join it back together with the "-" delimiter
}

function reset()
{
    count=0
    console.log(source_id)
    console.log(destination_id)
    document.getElementById(source_id).style.fill="#D9D9D9"
    document.getElementById(destination_id).style.fill="#D9D9D9"
    
    source_id=""
    destination_id=""
    document.getElementById("source").innerHTML="Source"
    document.getElementById("destination").innerHTML="Destination"
    console.log(paths)
    for (let index = 0; index < paths.length; index++) {
        p=paths[index]
        console.log("This is p "+p)
        try{document.getElementById(p).style.stroke="black"}
        catch(err)
        {
            p=reverseDateString(p)
            document.getElementById(p).style.stroke="black"
        }
        
    }


}


const graph = {
    //    1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
    // 1 [0 1 1 0 0 0 0 0 0  0  0  0  0  0  0]
    // 2 [1 0 1 1 0 0 0 0 0  0  0  0  0  0  0]
    // 3 [1 1 0 0 0 0 0 0 0  0  0  1  0  0  0]
    // 4 [0 1 0 0 1 1 1 0 0  0  0  0  0  0  0]
    // 5 [0 0 0 1 0 1 0 0 0  0  0  0  0  0  0]
    // 6 [0 0 0 1 1 0 0 0 0  0  0  0  0  0  0]
    // 7 [0 0 0 1 0 0 0 1 1  1  0  0  0  0  0]
    // 8 [0 0 0 0 0 0 1 0 1  0  1  0  0  0  0]
    // 9 [0 0 0 0 0 0 1 1 0  1  0  0  0  0  0]
    // 10[0 0 0 0 0 0 1 0 1  0  1  0  0  0  0]
    // 11[0 0 1 0 0 0 0 1 0  1  0  1  0  0  0]
    // 12[0 0 0 0 0 0 0 0 0  0  1  0  1  1  0]
    // 13[0 0 0 0 0 0 0 0 0  0  0  1  0  1  0]
    // 14[0 0 0 0 0 0 0 0 0  0  0  1  1  0  1]
    // 15[0 0 0 0 0 0 0 0 0  0  0  0  0  1  0]

         
    1: {2:225, 3:310 }, //1
    2: {1:225}, //2
    3: {1: 310, 12:165}, //3
    4: {5:54,6:443, 7:168}, //4
    5: {4:54, 6:440}, //5
    6: {4:443, 5:440},  //6
    7: {4:168, 9:170}, //7
    8: {9:78, 11: 145}, //8
    9: {7:170, 8:78, 10:170}, //9 
    // 10: {9:170, 11: 450}, //10
    // 11: {8:145, 10:450, 12:116}, //11
    // 12: {11:116, 3:165, 13:80, 14: 160}, //12
    // 13: {12:80}, //13
    // 14: {12: 160, 15: 162}, //14
    // 15: {14: 162}, //15
    

  };
  
  const printTable = (table) => {
    return Object.keys(table)
      .map((vertex) => {
        var { vertex: from, cost } = table[vertex];
        return `${vertex}: ${cost} via ${from}`;
      })
      .join("\n");
  };
  
  const tracePath = (table, start, end) => {
    var path = [];
    var next = end;
    while (true) {
      path.unshift(next);
      if (next === start) {
        break;
      }
      next = table[next].vertex;
    }
  
    return path;
  };
  
  const formatGraph = (g) => {
    const tmp = {};
    Object.keys(g).forEach((k) => {
      const obj = g[k];
      const arr = [];
      Object.keys(obj).forEach((v) => arr.push({ vertex: v, cost: obj[v] }));
      tmp[k] = arr;
    });
    return tmp;
  };
  
  const dijkstra = (graph, start, end) => {
    var map = formatGraph(graph);
  
    var visited = [];
    var unvisited = [start];
    var shortestDistances = { [start]: { vertex: start, cost: 0 } };
  
    var vertex;
    while ((vertex = unvisited.shift())) {
      // Explore unvisited neighbors
      var neighbors = map[vertex].filter((n) => !visited.includes(n.vertex));
  
      // Add neighbors to the unvisited list
      unvisited.push(...neighbors.map((n) => n.vertex));
  
      var costToVertex = shortestDistances[vertex].cost;
  
      for (let { vertex: to, cost } of neighbors) {
        var currCostToNeighbor =
          shortestDistances[to] && shortestDistances[to].cost;
        var newCostToNeighbor = costToVertex + cost;
        if (
          currCostToNeighbor == undefined ||
          newCostToNeighbor < currCostToNeighbor
        ) {
          // Update the table
          shortestDistances[to] = { vertex, cost: newCostToNeighbor };
        }
      }
  
      visited.push(vertex);
    }
  
    console.log("Table of costs:");
    console.log(printTable(shortestDistances));
    
  
    const path = tracePath(shortestDistances, start, end);
    console.log(path)
    console.log(
      "Shortest path is: ",
      path.join("-"),
      " with weight ",
      shortestDistances[end].cost
    );
    console.log(path)
    
    for (let index = 0; index < path.length-1; index++) {
        string=path[index]+"-"+path[index+1]
        console.log(string)
        try{document.getElementById(string).style.stroke="blue"}
        catch(err)
        {
            string=reverseDateString(string)
            document.getElementById(string).style.stroke="blue"

        }
        paths.push(string)
        string=""
    }
    
  };
  
//   dijkstra(graph, "6", "15");
  
  function compute()
  {
    dijkstra(graph, source_id, destination_id)
}