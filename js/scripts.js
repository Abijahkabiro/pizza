$(function () {
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        let order = (flavor, size, crust, topping, number, total) => {
            return {flavor, size, crust, topping, number, total};
        };












}