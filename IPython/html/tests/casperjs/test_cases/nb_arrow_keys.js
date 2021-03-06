//
// Check for errors with up and down arrow presses in a non-empty notebook.
//
casper.notebook_test(function () {
    var result = this.evaluate(function() {
        pos0 = IPython.notebook.get_selected_index();
        IPython.notebook.insert_cell_below('code'); 
        pos1 = IPython.notebook.get_selected_index();
        IPython.notebook.insert_cell_below('code'); 
        pos2 = IPython.notebook.get_selected_index();
        // Simulate the "up arrow" and "down arrow" keys.
        IPython.utils.press_up();
        pos3 = IPython.notebook.get_selected_index();
        IPython.utils.press_down();
        pos4 = IPython.notebook.get_selected_index();
        return  pos0 == 0 &&
                pos1 == 1 &&
                pos2 == 2 &&
                pos3 == 1 &&
                pos4 == 2;
    });
    this.test.assertTrue(result, 'Up/down arrow okay in non-empty notebook.');
});
