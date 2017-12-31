//Devin Dang
//4059282
//Battleship Game!

function player1Turn()
{		
	OkayToStart(player1.name);
	document.body.appendChild(shotmap1);
	document.body.appendChild(grid1);
}

function player2Turn()
{
	OkayToStart(player2.name);
	document.body.appendChild(shotmap2);
	document.body.appendChild(grid2);
}

function ClickGrid(name)
{
	var i = 0;
	var columnsLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
	var grid = document.createElement('table');
	grid.className = 'grid';
	grid.setAttribute("id", name);
	for (var rows = 0; rows < 11; rows++)
	{
		var tr = grid.appendChild(document.createElement('tr'));
		for (var cols = 0; cols < 11; cols++)
		{
			var cell = tr.appendChild(document.createElement('td'));

			if(rows === 0 && cols === 0)
			{
				cell.innerHTML = "";
				continue;
			}
			if(cols === 0)
			{
				cell.innerHTML = "<b>" + rows + "</b>";
				continue;
			}
			if(rows === 0)
			{
				cell.innerHTML = "<b>" + columnsLabels[cols - 1] + "</b>";
				continue;
			}

			cell.row = rows;
			cell.column = cols;
			cell.addEventListener("click", function(){
				fire(this, this.row, this.column, name);
			});
		}
	}

	return grid;
}

function fire(grid, row, column, name)
{
	if(name == "shotmap1")
	{
		if(grid2.rows[row].cells[column].innerHTML !== "")
		{
			grid.className = "hit";
			alert("Hit.");
			grid2.rows[row].cells[column].className = "hit";
		}
		else
		{
			grid.className = "miss";
			alert("Miss.");
			grid2.rows[row].cells[column].className = "miss";
		}
		document.body.removeChild(shotmap1);
		document.body.removeChild(grid1);
		setTimeout(function()
		{
			player2Turn();
		}, 0);
		
	}
	else if(name == "shotmap2")
	{
		if(grid1.rows[row].cells[column].innerHTML !== "")
		{
			grid.className = "hit";
			alert("hit.");
			grid1.rows[row].cells[column].className = "hit";
		}
		else
		{
			grid.className = "miss";
			alert("miss.");
			grid1.rows[row].cells[column].className = "miss";
		}
		document.body.removeChild(shotmap2);
		document.body.removeChild(grid2);
		setTimeout(function()
		{
			player1Turn();
		}, 0);
	}
}

function PlayerOne()
{
	var greeting;
	this.name = prompt("Player One, what is your name?");

	if (this.name == null || this.name == "")
	{
		greeting = "User is afk.";
	}
	else
	{
		greeting = "Nice to meet you, " + this.name + "!";
	}
	alert(greeting);

	this.position = collectPostions(this.name);
}

function PlayerTwo()
{
	var greeting;
	this.name = prompt("Player Two, what is your name?");

	if (this.name == null || this.name == "")
	{
		greeting = "User is afk.";
	}
	else
	{
		greeting = "Nice to meet you, " + this.name + "!";
	}
	alert(greeting);

	this.position = collectPostions(this.name);
}

function collectPostions(name)
{
		var shipPos = prompt("Where would you like to place your ships?");
		var regex = /[A,B,S][:,(][A-J][1-9]0?-[A-J][1-9]0?\)?;?/g;

		var posArray = shipPos.match(regex);

		while(posArray === null || posArray.length !== 3)
		{
			alert("Not valid input.");
			shipPos = prompt("Where would you like to place your ships?");
			regex = /[A,B,S][:,(][A-J][1-9]0?-[A-J][1-9]0?\)?;?/g;
			posArray = shipPos.match(regex);
			
		}
	
	return posArray;
}

function placeShips(name, location, grid)
{
	var something = location.toString();
	var regex = /[A-J][1-9]0?/g;
	var match = something.match(regex);
	if(match[0].charAt(0) == match[1].charAt(0))
	{
		for(var i = parseInt(match[0].charAt(1)); i <= parseInt(match[1].charAt(1)); i++)
		{
			grid.rows[i].cells[charToInt(match[0].charAt(0))].innerHTML = location[0].charAt(0);
		}
	}
	else if(match[0].charAt(1) == match[1].charAt(1))
	{
		for(var i = charToInt(match[0].charAt(0)); i <= charToInt(match[1].charAt(0)); i++)
		{
			grid.rows[parseInt(match[1].charAt(1))].cells[i].innerHTML = location[0].charAt(0);
		}
	}

	if(match[2].charAt(0) == match[3].charAt(0))
	{
		for(var i = parseInt(match[2].charAt(1)); i <= parseInt(match[3].charAt(1)); i++)
		{
			grid.rows[i].cells[charToInt(match[2].charAt(0))].innerHTML = location[1].charAt(0);
		}
	}
	else if(match[2].charAt(1) == match[3].charAt(1))
	{
		for(var i = charToInt(match[2].charAt(0)); i <= charToInt(match[3].charAt(0)); i++)
		{
			grid.rows[parseInt(match[3].charAt(1))].cells[i].innerHTML = location[1].charAt(0);
		}
	}

	if(match[4].charAt(0) == match[5].charAt(0))
	{
		for(var i = parseInt(match[4].charAt(1)); i <= parseInt(match[5].charAt(1)); i++)
		{
			grid.rows[i].cells[charToInt(match[4].charAt(0))].innerHTML = location[2].charAt(0);
		}
	}
	else if(match[4].charAt(1) == match[5].charAt(1))
	{
		for(var i = charToInt(match[4].charAt(0)); i <= charToInt(match[5].charAt(0)); i++)
		{
			grid.rows[parseInt(match[4].charAt(1))].cells[i].innerHTML = location[2].charAt(0);
		}
	}
}


function charToInt(letter)
{
	if(letter == 'A')
	{
		return 1;
	}
	if(letter == 'B')
	{
		return 2;
	}
	if(letter == 'C')
	{
		return 3;
	}
	if(letter == 'D')
	{
		return 4;
	}
	if(letter == 'E')
	{
		return 5;
	}
	if(letter == 'F')
	{
		return 6;
	}
	if(letter == 'G')
	{
		return 7;
	}
	if(letter == 'H')
	{
		return 8;
	}
	if(letter == 'I')
	{
		return 9;
	}
	if(letter == 'J')
	{
		return 10;
	}
}

function OkayToStart(name)
{
	alert("Press OK to start " + name + "'s turn!");
}



var player1 = new PlayerOne();
var player2 = new PlayerTwo();

var player1Score = 2;
var player2Score = 0;
	
var shotmap1 = ClickGrid("shotmap1");
var shotmap2 = ClickGrid("shotmap2");
	

var grid1 = ClickGrid(player1.name);
var grid2 = ClickGrid(player2.name);

placeShips(player1.name, player1.position, grid1);
placeShips(player2.name, player2.position, grid2);

player1Turn();




