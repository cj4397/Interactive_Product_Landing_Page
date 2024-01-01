
const cart = [];

const poster = {
  posters: [
    {
      id: 'poster1',
      name: 'Star Guardian 2022 Wild Rift Key Visual Poster',
      image: 'assets/item1.webp',
      pic: {
        size: {
          small: 'small',
          big: 'big',
        },
        framed: {
          with: 'with',
          without: 'without',
        },
      },
      details: {
        one: 'Commemorate a new wave of Star Guardians with this Star Guardian 2022 Wild Rift key visual poster!',
        two: 'Framed poster options use a dark wood material with plastic cover.',
      },
      price: '$22.00-$110.00',
      prices: {
        smallwith: 'assets/swith1.jpg',
        smallwithout: 'assets/swithout1.jpg',
        bigwith: 'assets/bwith1.jpg',
        bigwithout: 'assets/bwithout1.jpg',
      },
    },
    {
      id: 'poster2',
      name: 'Star Guardian 2022 League of Legends China Key Visual Poster',
      image: 'assets/item2.webp',
      pic: {
        size: {
          small: 'small',
          big: 'big',
        },
        framed: {
          with: 'with',
          without: 'without',
        },
      },
      details: {
        one: 'Commemorate the clash for the cosmos between the Star Guardians and the Star Nemeses with this Star Guardian 2022 League of Legends China key visual poster!',
        two: 'Framed poster options use a dark wood material with plastic cover.',
      },
      price: '$22.00-$110.00',
      prices: {
        smallwith: 'assets/swith2.jpg',
        smallwithout: 'assets/swithout2.jpg',
        bigwith: 'assets/bwith2.jpg',
        bigwithout: 'assets/bwithout2.jpg',
      },
    },
    {
      id: 'poster3',
      name: 'Star Guardian 2022 League of Legends Key Visual Poster',
      image: 'assets/item3.webp',
      pic: {
        size: {
          small: 'small',
          big: 'big',
        },
        framed: {
          with: 'with',
          without: 'without',
        },
      },
      details: {
        one: 'Commemorate the awakening of a new Star Guardian team with this Star Guardian 2022 League of Legends key visual poster!',
        two: 'Framed poster options use a dark wood material with plastic cover.',
      },
      price: '$22.00-$110.00',
      prices: {
        smallwith: 'assets/swith3.jpg',
        smallwithout: 'assets/swithout3.jpg',
        bigwith: 'assets/bwith3.jpg',
        bigwithout: 'assets/bwithout3.jpg',
      },
    },
    {
      id: 'poster4',
      name: 'Star Guardian 2022 League of Legends Key Visual Poster',
      image: 'assets/item4.webp',
      pic: {
        size: {
          small: 'small',
          big: 'big',
        },
        framed: {
          with: 'with',
          without: 'without',
        },
      },
      details: {
        one: 'Commemorate the awakening of a new Star Guardian team with this Star Guardian 2022 League of Legends key visual poster!',
        two: 'Framed poster options use a dark wood material with plastic cover.',
      },
      price: '$22.00-$110.00',
      prices: {
        smallwith: 'assets/swith4.jpg',
        smallwithout: 'assets/swithout4.jpg',
        bigwith: 'assets/bwith4.jpg',
        bigwithout: 'assets/bwithout4.jpg',
      },
    },
  ],
  functions: {
    card: () => {
      let x = poster.posters;

      for (let i in x) {
        let img = document.createElement('img');
        let main = document.getElementById(x[i].id);
        let item = document.createElement('div');

        img.setAttribute("src", x[i].image)
        img.classList.add('card-img-top');
        item.classList.add('card', 'h-100', 'border-gold', 'bg-transparent', 'white');

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let head = document.createElement('h5');
        let price = document.createElement('p');

        head.textContent = x[i].name;
        price.textContent = x[i].price;
        head.classList.add('fw-bolder');
        div2.append(head, price);
        div2.classList.add('text-center');
        div1.append(div2);
        div1.classList.add('card-body', 'p-1')



        let a = document.createElement('button');
        let b = document.createElement('div');
        let c = document.createElement('div');

        a.classList.add('btn', 'bg-magic', 'border-gold', 'mt-auto')
        a.textContent = 'View details'
        a.type = 'button'
        a.dataset.bsToggle = "modal";
        a.dataset.bsTarget = '#' + x[i].id + 'm'

        b.append(a);
        b.classList.add('text-center');
        c.append(b);
        c.classList.add('card-footer', 'p-4', 'pt-0', 'border-top-0', 'bg-transparent')
        item.append(img, div1, c)


        // modal part******************************
        let m1 = document.createElement('div');
        let m2 = document.createElement('div');
        let m3 = document.createElement('div');
        let m4 = document.createElement('div');
        let m5 = document.createElement('div');
        let m6 = document.createElement('div');

        m1.classList.add('modal', 'fade');
        m1.id = x[i].id + 'm';
        m1.dataset.bsBackdrop = "static";
        m1.dataset.bsKeyboard = "false";
        m1.tabIndex = "-1"


        m1.ariaHidden = "true"


        m2.classList.add('modal-dialog', 'modal-xl');
        m3.classList.add('modal-content');
        m4.classList.add('modal-header');
        let h1 = document.createElement('h1');
        h1.classList.add('modal-title', 'fs-5');
        h1.textContent = x[i].name;

        let btnclose = document.createElement('button');
        btnclose.classList.add('btn-close');
        btnclose.dataset.bsDismiss = "modal";
        btnclose.ariaLabel = "Close";
        m4.append(h1, btnclose);

        m5.classList.add('modal-body', 'container', 'row');


        // modal content***********************-************
        let car = document.createElement('div');

        car.classList.add('col-md-9')


        let cimg1 = document.createElement('img');
        cimg1.setAttribute("src", x[i].image)
        cimg1.classList.add('img-fluid')
        cimg1.id = x[i].id + 'car'

        car.append(cimg1);

        // ****************details and buttons**********************

        let coldet = document.createElement('div');
        coldet.classList.add('col-md-3', 'my-auto');
        let detaildiv = document.createElement('div');

        let details = document.createElement('h4');
        details.textContent = 'DETAILS';
        let des1 = document.createElement('p');
        des1.textContent = x[i].details.one;
        let des2 = document.createElement('p');
        des2.textContent = x[i].details.two;

        detaildiv.append(details, des1, des2);

        let hr = document.createElement('hr')
        hr.classList.add('border', 'mb-5', 'border-primary', 'border-3', 'opacity-75');


        let priced = document.createElement('div');
        let smalld = document.createElement('div');
        let bigd = document.createElement('div');
        let small = document.createElement('h4');
        let smallw = document.createElement('p');
        let smallwo = document.createElement('p');
        let big = document.createElement('h4');
        let bigw = document.createElement('p');
        let bigwo = document.createElement('p');
        small.innerText = 'Small(12 x 18)'
        big.innerText = 'Big(24 x 36)'
        smallw.innerHTML = 'Small with <b>NO</b> frame = <b>$22.00</b>'
        smallwo.innerHTML = 'Small with frame = <b>$55.00</b>'
        bigw.innerHTML = 'Big with <b>NO</b> frame = <b>$28.00</b>'
        bigwo.innerHTML = 'Big with frame = <b>$110.00</b>'

        smalld.append(small, smallw, smallwo);
        bigd.append(big, bigw, bigwo);
        priced.classList.add('mb-5')
        priced.append(smalld, bigd)


        let btndiv = document.createElement('div');

        let sizehead = document.createElement('h4');
        let framehead = document.createElement('h4');

        let sizediv = document.createElement('div');
        let framediv = document.createElement('div');
        let sizediv1 = document.createElement('div');
        let framediv1 = document.createElement('div');

        sizehead.textContent = 'POSTER SIZE'
        framehead.textContent = 'FRAME'

        let sizelabel1 = document.createElement('label');
        let sizelabel2 = document.createElement('label');
        let framelabel1 = document.createElement('label');
        let framelabel2 = document.createElement('label');
        let sizebtn1 = document.createElement('input');
        let sizebtn2 = document.createElement('input');
        let framebtn1 = document.createElement('input');
        let framebtn2 = document.createElement('input');

        sizelabel1.id = x[i].id + '_small'
        sizelabel2.id = x[i].id + '_big'
        framelabel1.id = x[i].id + '_without'
        framelabel2.id = x[i].id + '_with'

        sizelabel1.addEventListener("click", (e) => {
          let x = e.target.id;
          size(x);
        })

        sizelabel2.addEventListener("click", (e) => {
          let x = e.target.id;
          size(x);
        })

        framelabel1.addEventListener("click", (e) => {
          let x = e.target.id;
          size(x);
        })
        framelabel2.addEventListener("click", (e) => {
          let x = e.target.id;
          size(x);
        })


        sizebtn1.setAttribute('type', 'radio');
        sizebtn1.setAttribute('autocomplete', 'off');
        sizebtn1.setAttribute('checked', true);
        sizebtn1.id = x[i].id + 'small';
        sizebtn1.value = x[i].pic.size.small;

        sizebtn1.classList.add('btn-check')

        sizebtn1.setAttribute('name', x[i].id + 'size');
        sizelabel1.setAttribute('for', x[i].id + 'small');
        sizelabel1.classList.add('btn', 'btn-outline-primary', 'me-1');
        sizelabel1.innerText = x[i].pic.size.small + ': 12 x 18';


        sizebtn2.setAttribute('type', 'radio');
        sizebtn2.setAttribute('autocomplete', 'off');
        sizebtn2.id = x[i].id + 'big';
        sizebtn2.value = x[i].pic.size.big;

        sizebtn2.classList.add('btn-check')

        sizebtn2.setAttribute('name', x[i].id + 'size');
        sizelabel2.setAttribute('for', x[i].id + 'big');
        sizelabel2.classList.add('btn', 'btn-outline-primary', 'me-1');
        sizelabel2.innerText = x[i].pic.size.big + ': 24 x 36';

        sizediv1.append(sizebtn1, sizelabel1, sizebtn2, sizelabel2)
        sizediv.append(sizehead, sizediv1)

        framebtn1.setAttribute('type', 'radio');
        framebtn1.setAttribute('autocomplete', 'off');
        framebtn1.setAttribute('checked', true);
        framebtn1.id = x[i].id + 'without';
        framebtn1.value = x[i].pic.framed.without;

        framebtn1.classList.add('btn-check')

        framebtn1.setAttribute('name', x[i].id + 'frame');
        framelabel1.setAttribute('for', x[i].id + 'without');
        framelabel1.classList.add('btn', 'btn-outline-primary', 'me-1');
        framelabel1.innerText = 'No Frame';


        framebtn2.setAttribute('type', 'radio');
        framebtn2.setAttribute('autocomplete', 'off');
        framebtn2.id = x[i].id + 'with';
        framebtn2.value = x[i].pic.framed.with;

        framebtn2.classList.add('btn-check')

        framebtn2.setAttribute('name', x[i].id + 'frame');
        framelabel2.setAttribute('for', x[i].id + 'with');
        framelabel2.classList.add('btn', 'btn-outline-primary', 'me-1');
        framelabel2.innerText = 'Framed';

        framediv1.append(framebtn1, framelabel1, framebtn2, framelabel2);
        framediv.append(framehead, framediv1)
        btndiv.append(sizediv, framediv)

        coldet.append(detaildiv, hr, priced, btndiv);

        m5.append(car, coldet);

        m6.classList.add('modal-footer')
        let modalclose = document.createElement("button");
        let addcart = document.createElement("button");
        modalclose.classList.add('btn', 'btn-secondary');
        modalclose.dataset.bsDismiss = 'modal';
        modalclose.textContent = 'Close';

        addcart.classList.add("btn", "btn-primary");
        addcart.textContent = 'Add Cart'
        addcart.id = x[i].id + 'id'
        addcart.setAttribute('name', x[i].name);
        addcart.setAttribute('smallwithout', x[i].prices.smallwithout);
        addcart.setAttribute('smallwith', x[i].prices.smallwith);
        addcart.setAttribute('bigwithout', x[i].prices.bigwithout);
        addcart.setAttribute('bigwith', x[i].prices.bigwith);

        addcart.setAttribute('size', 'input[name =' + x[i].id + 'size' + ']:checked');
        addcart.setAttribute('framed', 'input[name =' + x[i].id + 'frame' + ']:checked');

        addcart.onclick = (e) => {
          let x = document.getElementById(e.target.id);
          let first = x.getAttribute('size');
          let second = x.getAttribute('framed');
          let size = document.querySelector(first).value;
          let framed = document.querySelector(second).value;
          let z = size + framed;
          let y = x.getAttribute(z);
          let price;
          switch (true) {
            case (z == 'smallwithout'):
              price = '22.00'
              break;
            case (z == 'smallwith'):
              price = '55.00'
              break;
            case (z == 'bigwithout'):
              price = '28.00'
              break;
            case (z == 'bigwith'):
              price = '110.00'
              break;
          };

          let buy = {
            name: x.getAttribute('name'),
            pic: y,
            price: price,
          };

          cart.push(buy)
          arr.push(parseInt(buy.price))
          alert("The item has been added to your cart!");
          add(cart.length);
          cartItems()

        }

        m6.append(modalclose, addcart)


        m3.append(m4, m5, m6);

        m2.append(m3);
        m1.append(m2)

        main.append(item, m1);


      }
    }
  }
}

const collectibles = {
  collectible: {
    figure1: {
      id: 'figure1',
      name: 'Star Guardian Soraka Figure',
      image: 'assets/figure1.webp',
      details: {
        one: '"Violence cannot go unanswered." Special Edition Star Guardian Soraka protects the team on their perilous missions from behind the frontlines with her grumpy and overprotective magical medium Shisa.',
        two: '<b>Features:</b> <br> <p style="text-indent: 30px">Soraka in her Star Guardian Skin with her Magical Medium, Shisa</p> <br> <p  style="text-indent: 30px">Collectible Series 3 box</p>',
      },
      price: '27.50',
      prices: {
        smallwith: 'assets/figure1.webp',
        smallwithout: 'assets/figure1a.webp',
        bigwith: 'assets/figure1b.webp',
        bigwithout: 'assets/figure1c.webp',
      },
    },
    figure2: {
      id: 'figure2',
      name: 'Star Guardian Jinx 1/7 Scale Figure',
      image: 'assets/figure2.webp',
      details: {
        one: "While her team knows it's effectively impossible to contain all of Star Guardian Jinx's explosiveness, this 1/7 scale figure just about manages it. With her transforming magical mediums, Shiro and Kuro, at her side, this Star Guardian Jinx figure is sculpted in impressive detail from hair to finger guns. Includes an acrylic stand to show and display wherever colorful mayhem may occur.",
        two: 'Produced by Good Smile Arts Shanghai.',
      },
      price: '260.00',
      prices: {
        smallwith: 'assets/figure2.webp',
        smallwithout: 'assets/figure2a.webp',
        bigwith: 'assets/figure2b.webp',
        bigwithout: 'assets/figure2c.webp',
      },
    },
    figure3: {
      id: 'figure3',
      name: 'Star Guardian Zoe 1/7 Scale Figure',
      image: 'assets/figure3.webp',
      details: {
        one: "Meticulously sculpted in all her chaotic, sparkling energy, this 1/7 scale figure of Star Guardian Zoe captures her mid-Portal Jump. From her flowing celestial locks to her chaotic magical medium, no detail has been spared of this former Star Guardian. Includes an acrylic stand to show and display wherever holes in reality may occur.",
        two: '<b>Approximate Dimensions</b><br><p style="text-indent: 30px">Height: 9.45 in / 24 cm</p><br> <p>Produced by Good Smile Arts Shanghai.</p>',
      },
      price: '350.00',
      prices: {
        smallwith: 'assets/figure3.webp',
        smallwithout: 'assets/figure3a.webp',
        bigwith: 'assets/figure3b.webp',
        bigwithout: 'assets/figure3c.webp',
      },
    },
    figure4: {
      id: 'figure4',
      name: 'Star Guardian Ahri',
      image: 'assets/figure4.jpg',
      details: {
        one: "Painted 1/7th scale plastic product with stand included. Approximately 370mm in height.",
        two: '<p>The pictures shown may differ slightly from the actual product.</p><br><p>Since the painting process of the product is done manually, there are some differences between each product. Please note.</p>',
      },
      price: '$215.07',
      prices: {
        smallwith: 'assets/figure4.jpg',
        smallwithout: 'assets/figure4a.jpg',
        bigwith: 'assets/figure4b.jpg',
        bigwithout: 'assets/figure4c.jpg',
      },
    },
    acc1: {
      id: 'acc1',
      name: 'Star Guardian Akali Charm Bracelet',
      image: 'assets/acc1.webp',
      details: {
        one: "Handcrafted in durable artisan brass and thickly plated in glowing warm 14K yellow gold, Kai’Sa and Akali’s charm bracelets are brought to life! Soft pink for Kai’Sa and light blue for Akali, each flower charm features glittering pavé faceted crystals with a sunny yellow crystal center. The substantial bangle is an elegant geometric diamond shape that gently flares at the hinge and clasp to keep the dangling flower charm safe and secure, unable to slide off.<br>One size fits many, easy on and off! The inconspicuous clasp opens by pressing down on the lever, and then snaps firmly shut with a click!<br>About 14K yellow gold plating: RockLove’s standard of quality includes a plating thickness four times thicker than industry standard to ensure precious metal longevity and brilliance.",
        two: '<b>Features:</b><br><p><b>Metal:</b> 14K yellow gold plated brass<br><b>Crystals:</b> Cubic Zirconica<br><b>Style:</b> Hinged circular bangle<br><b>Dimensions:</b> Bangle is 4mm x 4mm thick, charm is 13 mm x 13mm<br><b>Bangle Size:</b> 60mm inner diameter</p>',
      },
      price: '95.00',
      prices: {
        smallwith: 'assets/acc1.webp',
        smallwithout: 'assets/acc1a.webp',
        bigwith: 'assets/acc1b.webp',
        bigwithout: 'assets/acc1c.webp',
      },
    },
    acc2: {
      id: 'acc2',
      name: "Guardian Kai'Sa Charm Bracelet",
      image: 'assets/acc2.webp',
      details: {
        one: "Handcrafted in durable artisan brass and thickly plated in glowing warm 14K yellow gold, Kai’Sa and Akali’s charm bracelets are brought to life! Soft pink for Kai’Sa and light blue for Akali, each flower charm features glittering pavé faceted crystals with a sunny yellow crystal center. The substantial bangle is an elegant geometric diamond shape that gently flares at the hinge and clasp to keep the dangling flower charm safe and secure, unable to slide off.<br>One size fits many, easy on and off! The inconspicuous clasp opens by pressing down on the lever, and then snaps firmly shut with a click!<br>About 14K yellow gold plating: RockLove’s standard of quality includes a plating thickness four times thicker than industry standard to ensure precious metal longevity and brilliance.",
        two: '<b>Features:</b><br><p><b>Metal:</b> 14K yellow gold plated brass<br><b>Crystals:</b> Cubic Zirconica<br><b>Style:</b> Hinged circular bangle<br><b>Dimensions:</b> Bangle is 4mm x 4mm thick, charm is 13 mm x 13mm<br><b>Bangle Size:</b> 60mm inner diameter</p>',
      },
      price: '95.00',
      prices: {
        smallwith: 'assets/acc2.webp',
        smallwithout: 'assets/acc2a.webp',
        bigwith: 'assets/acc2b.webp',
        bigwithout: 'assets/acc2c.webp',
      },
    },
    acc3: {
      id: 'acc3',
      name: "Star Guardian Ina Stacker Rings",
      image: 'assets/acc3.webp',
      details: {
        one: "As Star Guardian Kai’Sa’s adorable magical medium, Ina is sure to steal your heart!<br>Handcrafted in solid nickel-free sterling silver, Ina joins you on your adventures in this magical two-part stacking ring set! Featuring hand painted pink and black premium enamel details, the sculpted three-dimensional Ina is framed by 14K yellow gold stars accents.<br>The Ina Stacker Rings come as a set of two and is available in an array of sizes.",
        two: '<b>Features:</b><br><p><b>Sizes:</b> 5 - 6 - 7 - 8<br><b>Metal:</b> 14k yellow gold plated sterling silver<br><b>Dimensions:</b> 21mm x 15mm</p>',
      },
      price: '99.00',
      prices: {
        smallwith: 'assets/acc3.webp',
        smallwithout: 'assets/acc3a.webp',
        bigwith: 'assets/acc3b.webp',
        bigwithout: 'assets/acc3c.webp',
      },
    },
    acc4: {
      id: 'acc4',
      name: "Star Guardian Kiko Pendant",
      image: 'assets/acc4.webp',
      details: {
        one: "The mischievous Kiko accompanies Ahri as a vulpine embodiment of her charisma… and sass.<br>   Handcrafted in solid nickel-free sterling silver, Kiko's heart sparkles just for you! Charmingly sculpted and antiqued for detail, the weighty three-dimensional Kiko frames a glittering soft pink faceted heart-shaped crystal. The pendant hangs from an adjustable nickel-free sterling silver rope chain with lobster clasp and League of Legends signature tag.",
        two: '<b>Features:</b><br><p><b>Metal:</b> Nickel-free Sterling silver<br><b>Crystal:</b> Cubic Zirconia <br> <b>Chain:</b> 18 to 20 inch adjustable rope chain  <br><b>Dimensions:</b> 17mm x 14mm x 13mm</p>',
      },
      price: '135.00',
      prices: {
        smallwith: 'assets/acc4.webp',
        smallwithout: 'assets/acc4a.webp',
        bigwith: 'assets/acc4b.webp',
        bigwithout: 'assets/acc4c.webp',
      },
    },
    acc5: {
      id: 'acc5',
      name: 'Star Guardian "Hope" Locket',
      image: 'assets/acc5.webp',
      details: {
        one: "Handcrafted in solid nickel-free sterling silver, this glittering Star Guardian locket features a secret inspiring message inside! Thickly plated in glowing warm 14K yellow gold, the dazzling locket features dozens of soft pink pavé crystals surrounding a rosy custom cut star-shaped crystal. The reverse of the pendant contains a hidden door that hinges open to reveal an engraved reminder in beautiful contrasting script: Hope burns brighter than fear.<br>        Locket door snaps securely shut while the pendant hangs from an adjustable 14k yellow gold-plated nickel-free sterling silver rope chain with lobster clasp and League of Legends signature tag.<br> About 14k yellow gold plating: RockLove's standard of quality includes a plating thickness four times thicker than industry standard to ensure precious metal longevity and brilliance.",
        two: '<b>Features:</b><br><p><b>Metal:</b> 14k yellow gold plated sterling silver<br><b>Crystal:</b> Cubic Zirconia <br> <b>Chain:</b> 18 to 20 inch adjustable rope chain  <br><b>Dimensions:</b> 26mm x 18mm</p>',
      },
      price: '150.00',
      prices: {
        smallwith: 'assets/acc5.webp',
        smallwithout: 'assets/acc5a.webp',
        bigwith: 'assets/acc5b.webp',
        bigwithout: 'assets/acc5c.webp',
      },
    },
    acc6: {
      id: 'acc6',
      name: "Star Guardian Soraka Wand Pendant",
      image: 'assets/acc6.webp',
      details: {
        one: "A gentle soul with a mysterious origin amongst the stars, Soraka protects her Star Guardian team with her immense healing powers.<br>  Handcrafted in solid nickel-free sterling silver, Soraka's Wand now comes in wearable glimmering miniature! Delicately detailed with 14k yellow gold accents, the sculpted design features a custom cut Aurora Borealis star-shaped crystal. Framed by four more faceted round jewels, the iridescent Aurora Borealis crystals change color as the necklace moves - flashing the spectrum of pinks, purples, and blues! The pendant hangs from an adjustable nickel-free sterling silver rope chain with lobster clasp and League of Legends signature tag.",
        two: '<b>Features:</b><br><p><b>Metal:</b> 14K yellow gold plated sterling silver<br><b>Crystal:</b> Cubic Zirconia <br> <b>Chain:</b> 18 to 20 inch adjustable rope chain  <br><b>Dimensions:</b> 44mm x 14mm</p>',
      },
      price: '125.00',
      prices: {
        smallwith: 'assets/acc6.webp',
        smallwithout: 'assets/acc6a.webp',
        bigwith: 'assets/acc6b.webp',
        bigwithout: 'assets/acc6c.webp',
      },
    },
  },

  functions: {
    card: () => {
      let x = collectibles.collectible;

      for (let i in x) {
        let img = document.createElement('img');
        let main = document.getElementById(x[i].id);
        let item = document.createElement('div');

        img.setAttribute("src", x[i].image)
        img.classList.add('card-img-top');
        item.classList.add('card', 'h-100', 'border-gold', 'bg-transparent', 'white');

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let head = document.createElement('h5');
        let price = document.createElement('p');

        head.textContent = x[i].name;
        price.textContent = '$' + x[i].price;
        head.classList.add('fw-bolder');
        div2.append(head, price);
        div2.classList.add('text-center');
        div1.append(div2);
        div1.classList.add('card-body', 'p-1')



        let a = document.createElement('button');
        let b = document.createElement('div');
        let c = document.createElement('div');

        a.classList.add('btn', 'bg-magic', 'border-gold', 'mt-auto')
        a.textContent = 'View details'
        a.type = 'button'
        a.dataset.bsToggle = "modal";
        a.dataset.bsTarget = '#' + x[i].id + 'm'

        b.append(a);
        b.classList.add('text-center');
        c.append(b);
        c.classList.add('card-footer', 'p-4', 'pt-0', 'border-top-0', 'bg-transparent')
        item.append(img, div1, c)


        // modal part******************************
        let m1 = document.createElement('div');
        let m2 = document.createElement('div');
        let m3 = document.createElement('div');
        let m4 = document.createElement('div');
        let m5 = document.createElement('div');
        let m6 = document.createElement('div');

        m1.classList.add('modal', 'fade');
        m1.id = x[i].id + 'm';
        m1.dataset.bsBackdrop = "static";
        m1.dataset.bsKeyboard = "false";
        m1.tabIndex = "-1"


        m1.ariaHidden = "true"


        m2.classList.add('modal-dialog', 'modal-xl');
        m3.classList.add('modal-content');
        m4.classList.add('modal-header');
        let h1 = document.createElement('h1');
        h1.classList.add('modal-title', 'fs-5');
        h1.textContent = x[i].name;

        let btnclose = document.createElement('button');
        btnclose.classList.add('btn-close');
        btnclose.dataset.bsDismiss = "modal";
        btnclose.ariaLabel = "Close";
        m4.append(h1, btnclose);

        m5.classList.add('modal-body', 'container', 'row');


        // modal content***********************-************
        let car = document.createElement('div');
        let carousel = document.createElement('div');
        let indi = document.createElement('div');
        let carin = document.createElement('div');

        car.classList.add('col-md-8')
        carousel.id = x[i].id + "c";
        carousel.classList.add('carousel', 'slide', 'carousel-dark')
        carousel.dataset.bsRide = "false";

        indi.classList.add('carousel-indicators');
        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');
        let btn3 = document.createElement('button');
        let btn4 = document.createElement('button');

        btn1.type = 'button';
        btn2.type = 'button';
        btn3.type = 'button';
        btn4.type = 'button';


        btn1.dataset.bsTarget = '#' + x[i].id + "c";
        btn2.dataset.bsTarget = '#' + x[i].id + "c";
        btn3.dataset.bsTarget = '#' + x[i].id + "c";
        btn4.dataset.bsTarget = '#' + x[i].id + "c";

        btn1.dataset.bsSlideTo = '0';
        btn2.dataset.bsSlideTo = '1';
        btn3.dataset.bsSlideTo = '2';
        btn4.dataset.bsSlideTo = '3';


        btn1.ariaLabel = 'Slide 1';
        btn2.ariaLabel = 'Slide 2';
        btn3.ariaLabel = 'Slide 3';
        btn4.ariaLabel = 'Slide 4';

        btn1.ariaCurrent = "true";
        btn1.classList.add('active')
        indi.append(btn1, btn2, btn3, btn4);

        carin.classList.add('carousel-inner');
        let cari1 = document.createElement('div');
        let cimg1 = document.createElement('img');
        let cde1 = document.createElement('div');
        let cprice1 = document.createElement('h5');
        let cdetail1 = document.createElement('p');

        cde1.classList.add('carousel-caption', 'text-primary', 'd-none', 'd-md-block')
        cde1.append(cprice1, cdetail1);
        cimg1.setAttribute("src", x[i].prices.smallwith);
        cimg1.classList.add('d-block', 'w-100')
        cari1.classList.add('carousel-item', 'active')
        cari1.append(cimg1, cde1)

        let cari2 = document.createElement('div');
        let cimg2 = document.createElement('img');
        let cde2 = document.createElement('div');
        let cprice2 = document.createElement('h5');
        let cdetail2 = document.createElement('p');
        cde2.classList.add('carousel-caption', 'text-primary', 'd-none', 'd-md-block')
        cde2.append(cprice2, cdetail2);
        cimg2.setAttribute("src", x[i].prices.smallwithout);
        cimg2.classList.add('d-block', 'w-100');
        cari2.classList.add('carousel-item');
        cari2.append(cimg2, cde2);


        let cari3 = document.createElement('div');
        let cimg3 = document.createElement('img');
        let cde3 = document.createElement('div');
        let cprice3 = document.createElement('h5');
        let cdetail3 = document.createElement('p');
        cde3.classList.add('carousel-caption', 'text-primary', 'd-none', 'd-md-block')
        cde3.append(cprice3, cdetail3);
        cimg3.setAttribute("src", x[i].prices.bigwith);
        cimg3.classList.add('d-block', 'w-100');
        cari3.classList.add('carousel-item');
        cari3.append(cimg3, cde3);

        let cari4 = document.createElement('div');
        let cimg4 = document.createElement('img');
        let cde4 = document.createElement('div');
        let cprice4 = document.createElement('h5');
        let cdetail4 = document.createElement('p');
        cde4.classList.add('carousel-caption', 'text-primary', 'd-none', 'd-md-block')
        cde4.append(cprice4, cdetail4);
        cimg4.setAttribute("src", x[i].prices.bigwithout);
        cimg4.classList.add('d-block', 'w-100');
        cari4.classList.add('carousel-item');
        cari4.append(cimg4, cde4);


        carin.append(cari1, cari2, cari3, cari4);

        let prev = document.createElement('button');
        let previcon = document.createElement('span');
        let prevtext = document.createElement('span');
        previcon.classList.add('carousel-control-prev-icon');
        previcon.ariaHidden = 'true';
        prevtext.innerText = 'Previous';
        prevtext.classList.add('visually-hidden');
        prev.classList.add('carousel-control-prev');
        prev.dataset.bsTarget = '#' + x[i].id + "c";
        prev.dataset.bsSlide = "prev";
        prev.append(previcon, prevtext)

        let next = document.createElement('button');
        let nexticon = document.createElement('span');
        let nexttext = document.createElement('span');
        nexticon.classList.add('carousel-control-next-icon');
        nexticon.ariaHidden = 'true';
        nexttext.innerText = 'Next';
        nexttext.classList.add('visually-hidden')
        next.classList.add('carousel-control-next');
        next.dataset.bsTarget = '#' + x[i].id + "c";
        next.dataset.bsSlide = "next";
        next.append(nexticon, nexttext);

        carousel.append(indi, carin, prev, next);

        car.append(carousel);


        // ****************details and buttons**********************

        let coldet = document.createElement('div');
        coldet.classList.add('col-md-4', 'my-auto');
        let detaildiv = document.createElement('div');

        let details = document.createElement('h4');
        details.textContent = 'DETAILS';
        let des1 = document.createElement('p');
        des1.innerHTML = x[i].details.one;
        let des2 = document.createElement('p');
        des2.innerHTML = x[i].details.two;

        detaildiv.append(details, des1, des2);

        let hr = document.createElement('hr')
        hr.classList.add('border', 'mb-5', 'border-primary', 'border-3', 'opacity-75');

        let fprice = document.createElement('h4');
        fprice.textContent = 'PRICE';

        let btndiv = document.createElement('div');
        let btnprice = document.createElement('button');
        btndiv.classList.add('text-center');
        btnprice.classList.add('btn', 'btn-primary', 'px-4', 'mt-3')
        btnprice.textContent = '$' + x[i].price;

        btndiv.append(fprice, btnprice)
        coldet.append(detaildiv, hr, btndiv)

        m5.append(car, coldet);

        m6.classList.add('modal-footer')
        let modalclose = document.createElement("button");
        let addcart = document.createElement("button");
        modalclose.classList.add('btn', 'btn-secondary');
        modalclose.dataset.bsDismiss = 'modal';
        modalclose.textContent = 'Close';

        addcart.classList.add("btn", "btn-primary");
        addcart.textContent = 'Add Cart'
        addcart.id = x[i].id + 'id'
        addcart.setAttribute('name', x[i].name);
        addcart.setAttribute('price', x[i].price);
        addcart.setAttribute('pic', x[i].image);


        addcart.onclick = (e) => {
          let x = document.getElementById(e.target.id);


          let buy = {
            name: x.getAttribute('name'),
            pic: x.getAttribute('pic'),
            price: x.getAttribute('price'),
          };

          arr.push(parseInt(buy.price))
          cart.push(buy)
          alert("The item has been added to your cart!");
          add(cart.length);
          cartItems()

        }

        m6.append(modalclose, addcart)


        m3.append(m4, m5, m6);

        m2.append(m3);
        m1.append(m2)

        main.append(item, m1);


      }
    }
  }


}


function size(e) {
  let x = e.split('_')
  let obj = poster.posters.find(o => o.id === x[0]);

  let imgcar = document.getElementById(x[0] + 'car')


  let frame = document.querySelector('input[name =' + x[0] + 'frame' + ']:checked')
  let zize = document.querySelector('input[name =' + x[0] + 'size' + ']:checked')


  switch (true) {
    case x[1] === 'small' && frame.value === 'with':
      imgcar.src = obj.prices.smallwith
      break
    case x[1] === 'small' && frame.value === 'without':
      imgcar.src = obj.prices.smallwithout
      break
    case x[1] === 'big' && frame.value === 'with':
      imgcar.src = obj.prices.bigwith
      break
    case x[1] === 'big' && frame.value === 'without':
      imgcar.src = obj.prices.bigwithout
      break
    case x[1] === 'with' && zize.value === 'small':
      imgcar.src = obj.prices.smallwith
      break
    case x[1] === 'with' && zize.value === 'big':
      imgcar.src = obj.prices.bigwith
      break
    case x[1] === 'without' && zize.value === 'big':
      imgcar.src = obj.prices.bigwithout
      break
    case x[1] === 'without' && zize.value === 'small':
      imgcar.src = obj.prices.smallwithout
      break
  }

}



let cart_content = document.getElementById('cart-content')
let content = document.getElementById('Mcartc');
let arr = [];

let total = document.getElementById('total')


function add(x) {


  function y(x) {
    return x++
  };

  return cart_content.innerText = y(x)
}

function removed(x, y) {

  document.getElementById(y).remove();
  let content = parseInt(cart_content.innerText);
  cart_content.innerText = content - 1;
  cart.splice(x, 1);
  arr.splice(x, 1);

  switch (true) {
    case arr.length !== 0:
      total.textContent = '$' + sum();
      break;
    case arr.length === 0:
      total.textContent = '$0.00';
      break;
  }

  alert('Item has been removed')

}



function sum() {

  let sum = arr.reduce(function (a, b) {
    return a + b;
  });
  return sum

}

function cartItems() {
  let container = document.createElement('div');
  let card = document.createElement('div');
  let details = document.createElement('div');
  let text = document.createElement('div');
  let footer = document.createElement('div');
  let name = document.createElement('h2');
  let pic = document.createElement('img');
  let btn = document.createElement('button');
  let price = document.createElement('h4');

  pic.classList.add('img-fluid')
  container.classList.add('bg-transparent')

  for (let i = 0; i < cart.length; i++) {

    btn.textContent = 'Remove item'
    name.textContent = cart[i].name;
    pic.setAttribute("src", cart[i].pic);

    price.textContent = '$' + cart[i].price;

    btn.setAttribute("id", 'name' + i);
    btn.setAttribute("num", i);

    card.classList.add('card', 'h-100', 'border-gold');
    details.classList.add('card-body', 'p-3');
    text.classList.add('text-center');
    price.classList.add('fw-bolder', 'border-bottom', 'border-top', 'border-3', 'border-danger');
    footer.classList.add('card-footer', 'text-center', 'p-3', 'pt-0', 'border-top-0', 'bg-transparent');
    btn.classList.add('btn', 'btn-danger');

    // ******************remove item***************
    btn.onclick = (e) => {
      let x = e.target.getAttribute('num')
      let y = e.target.getAttribute('id')



      removed(x, y)
    };


    footer.append(btn)
    text.append(name, price)
    details.append(text)
    card.append(pic, details, footer)
    container.append(card);
    container.id = 'name' + i;

    card.classList.add('my-3')

    content.append(container)


  }


  total.textContent = '$' + sum()


}


function openCity(evt, Name) {
  var i, tabcontent, tablinks;

  tablinks = document.getElementsByClassName("tablinks");
  tabcontent = document.getElementsByClassName("tabcontent");


  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  for (i = 0; i < tablinks.length; i++) {
    if (tablinks[i].classList.contains("active")) {
      tablinks[i].classList.remove('active')
    };
  }

  if (Name === 'all') {
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "flex";
      evt.currentTarget.className += " active";
    }
  }

  document.getElementById(Name).style.display = "flex";
  evt.currentTarget.classList.add('active');
}


document.addEventListener("DOMContentLoaded", () => {
  poster.functions.card()
  collectibles.functions.card()
});
