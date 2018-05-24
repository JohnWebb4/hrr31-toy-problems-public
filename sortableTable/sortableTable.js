/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

/* Notes
 * Hook event on all table headers (<th>)
 ** Delegate event to table header
 * Need index of clicked header in relation to other headers (1st header, 2nd, etc..)
 * Iterate of each table row in table body
 * Sort table element that is same index as header
 * Update table body with result
 *
 * Whiteboarding
 * I: None
 * O: None (mutate table body)
 * C: Must sort words, integers, floats, and dates
 * E: Element is missing data to sort by
 *
 * Hook event
 * Hook click event on table header that is only called if a table header element is clicked
 ** Lookup index of element in table headers and store to variable x
 ** Lookup all table rows in table body and store to variable
 ** Iterate over each table row
 ** Bubble sort on index x
 ** Assign sorted elements to table body
*/

$(function () {
  var getDataFromTableRows = function($array, elementIndex, dataIndex) {
    return $($($array[elementIndex]).find('td')[dataIndex]).text();
  }

  $('#myTable thead tr').on('click', 'th', function(event) {
    var sortIndex = $(event.target).index();

    $items = $('#myTable tbody tr');

    var parseString = function(string) {
      if (Number(string) !== NaN){
        return Number(string);
      } else if (new Date(string).valueOf !== NaN) {
        return new Date(string);
      } else {
        return string
      }
    };

    var swapNodes = function(node1, node2) {
      var copyNode1 = $(node1).clone(true);
      var copyNode2 = $(node2).clone(true);

      $(node1).replaceWith(copyNode2);
      $(node2).replaceWith(copyNode1);
    };

    // Bubble sort
    var counter = 0;
    var changedValue = false;
    do {
      changedValue = false;
      $items.each(function(index, value) {
        if (index < $items.length - 1) {
          var value1 = parseString(getDataFromTableRows($items, index, sortIndex));
          var value2 = parseString(getDataFromTableRows($items, index + 1, sortIndex));
          if (value1 < value2) {
            swapNodes($items[index], $items[index + 1]);
            $items = $('#myTable tbody tr');

            changedValue = true;
          }
        }
      });
      counter++;
    } while(changedValue);
  });
});

