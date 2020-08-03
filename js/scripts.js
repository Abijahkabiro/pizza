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

        let price, totalPrice;
        switch (flavour) {
            case flavour = "periperi":
                switch (size) {
                    case size = "pizza-pie":
                        price = 280;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "regular":
                        price = 560;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "medium":
                        price = 780;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "large":
                        price =1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "double-stack":
                        price = 1260;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "mega":
                        price = 1340;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
            case flavour = "bbq":
                switch (size) {
                    case size = "pizza-pie":
                        price = 280;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "regular":
                        price = 560;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "medium":
                        price = 780;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "large":
                        price =1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "double-stack":
                        price = 1260;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "mega":
                        price = 1340;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
            case flavour = "chickentikka":
                switch (size) {
                        case size = "pizza-pie":
                            price = 280;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 170;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 200;
                            } else {
                                totalPrice = (price * number) + 270;
                            }
                            break;
    
                            case size = "regular":
                            price = 560;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 170;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 200;
                            } else {
                                totalPrice = (price * number) + 270;
                            }
                            break;
    
                            case size = "medium":
                            price = 780;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 170;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 200;
                            } else {
                                totalPrice = (price * number) + 270;
                            }
                            break;
    
                            case size = "large":
                            price =1100;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 170;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 200;
                            } else {
                                totalPrice = (price * number) + 270;
                            }
                            break;
    
                            case size = "double-stack":
                            price = 1260;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 170;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 200;
                            } else {
                                totalPrice = (price * number) + 270;
                            }
                            break;
    
                            case size = "mega":
                            price = 1340;
                            if (crust === "thin") {
                                totalPrice = (price * number) + 120;
                            } else if (crust === "thick") {
                                totalPrice = (price * number) + 170;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 200;
                            } else {
                                totalPrice = (price * number) + 270;
                            }
                            break;
            
            case flavour = "hawaiian":
                switch (size) {
                    case size = "pizza-pie":
                        price = 280;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "regular":
                        price = 560;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "medium":
                        price = 780;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "large":
                        price =1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "double-stack":
                        price = 1260;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "mega":
                        price = 1340;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
            
            case flavour = "mushroom":
                switch (size) {
                    case size = "pizza-pie":
                        price = 280;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "regular":
                        price = 560;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "medium":
                        price = 780;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "large":
                        price =1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "double-stack":
                        price = 1260;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "mega":
                        price = 1340;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

             case flavour = "vegtikka":
                 switch (size) {
                    case size = "pizza-pie":
                        price = 280;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "regular":
                        price = 560;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "medium":
                        price = 780;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "large":
                        price =1100;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "double-stack":
                        price = 1260;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;

                        case size = "mega":
                        price = 1340;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 120;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 170;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else {
                            totalPrice = (price * number) + 270;
                        }
                        break;
        }
                        








}