

function setDates()
        {
            var today = new Date();
            var day = String(today.getDate());
            var month = String(today.getMonth()+1);
            var year = String(today.getFullYear());
            var currentDate = year + "-" + month + "-" + day;
            document.getElementById("date").value = currentDate;
            document.getElementById("date").min = currentDate;
            var newDay;
            var newMonth;
            var newYear;
            if(month == 2){
                if(day + 14 <= 28){
                    newDay = (parseInt(day) + 14).toString();
                    newMonth = month;
                    newYear = year;
                }
                else{
                    newDay = (14-(28-parseInt(day))).toString();
                    newMonth = (parseInt(day) + 1).toString();
                    newYear = year;
                }
            }
            else if(month == 12)
            {
                if(day + 14 <= 31)
                {
                    newDay = (parseInt(day) + 14).toString();
                    newMonth = month;
                    newYear = year;
                }
                else
                {
                    newDay = (14-(31-parseInt(day))).toString();
                    newMonth = "1";
                    newYear = (parseInt(year) + 1).toString();
                }
            }
            else if(month % 2 == 0){
                if(day + 14 <= 30){
                    newDay = (parseInt(day) + 14).toString();
                    newMonth = month;
                    newYear = year;
                }
                else{
                    newDay = (14-(30-parseInt(day))).toString();
                    newMonth = (parseInt(month) + 1).toString();
                    newYear = year;
                }
            }
            else{
                if(day + 14 <= 31){
                    newDay = (parseInt(day) + 14).toString();
                    newMonth = month;
                    newYear = year;
                }
                else{
                    newDay = (14-(31-parseInt(day))).toString();
                    newMonth = (parseInt(month) + 1).toString();
                    newYear = year;
                }
            }
            if(newMonth.length == 1)
            {
                newMonth = "0" + newMonth;
            }
            if(newDay.length == 1)
            {
                newDay = "0" + newDay;
            }
            var until = newYear + "-" + newMonth + "-" + newDay;
            document.getElementById("date").max = until;
        }