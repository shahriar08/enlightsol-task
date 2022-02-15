import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "razer blackwidow",
                "src": "https://i.ibb.co/6Yq6QPD/158791-laptops-review-razer-blade-14-review-image7-bdmxrnihng.jpg",
                "content": "The Razer BlackWidow lets you experience full gaming immersion with Razer Chroma™. It showcases up to 16.8 million colors in varying effects such as Spectrum Cycling, Wave, Breathing, and Ripple, and reacts to in-game events when playing Razer Chroma™ integrated games.",
                "price": 230,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Razer Barracuda",
                "src": "https://i.ibb.co/YRnxq3V/16-sep-huntsman-v2-1500x1000-1.jpg",
                "content": "The Razer Barracuda X is a versatile, lightweight wireless gaming headset designed for seamless use across PC, PlayStation, Nintendo Switch, and Android. The patented design enables our acoustic engineers to custom-tune each audio driver as though there are three, allowing for the individual replications of high, mid, and low audio frequencies. This not only delivers richer trebles, brighter midrange, and powerful bass but results in a clear sound that doesn't muddy. As the power button on the Razer Barracuda X doubles up as an audio playback button, it provides easily accessible control that doesn't require fussing with your phone. The Ultra-light at just 250g, our multi-platform wireless headset has been designed for long-lasting comfort and all-day use. The Razer Barracuda X comes with 2 years of warranty.",
                "price": 190,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Razer Kraken V3",
                "src": "https://i.ibb.co/r0pzQ5W/000001-1640059818.jpg",
                "content": "The Razer Kraken V3 uses THX Spatial Audio activated via Razer Synapse 3. It provides pinpoint positional sound and greater immersion across your music, movies, and games, and gives you access to custom-tuned profiles that are optimized for your favorite games.",
                "price": 129.99,
                "count": 1
            },
            {
                "_id": "4",
                "title": "Razer Huntsman 3",
                "src": "https://i.ibb.co/qMKVcJ8/16-sep-huntsman-v2-1500x1000-4.jpg",
                "content": "Make your foray into true gaming performance with the Razer Huntsman, or go full-fledged with the Razer Huntsman Elite and its suite of features—a magnetic wrist rest, multi-function digital dial and media keys to underglow powered by Razer Chroma™.",
                "price": 189.99,
                "count": 1
            },
            {
                "_id": "5",
                "title": "Gigabyte RTX 3070",
                "src": "https://i.ibb.co/4VsJrtT/rtx-3070-ti-box-500x500.jpg",
                "content": "The Gigabyte GeForce RTX 3070 Ti Gaming OC 8GB Graphics Card comes with some special features. It is powered by GeForce RTX 3070 Ti, Integrated with 8GB GDDR6 256-bit memory interface. It features WINDFORCE 3X Cooling System with alternate spinning fans, RGB Fusion 2.0, Protection metal backplate. The all-new NVIDIA Ampere architecture delivers the ultimate play, featuring advanced 2nd generation Ray Tracing Cores and 3rd generation Tensor Cores with greater throughput. Experience today biggest blockbusters like never before with the visual fidelity of real-time ray tracing and the ultimate performance of AI-powered DLSS. NVIDIA DLSS is groundbreaking AI rendering that boosts frame rates with uncompromised image quality using the dedicated AI processing Tensor Cores on GeForce RTX. This gives you the performance headroom to crank up settings and resolutions for an incredible visual experience. The AI revolution has come to gaming. NVIDIA Reflex delivers the ultimate competitive advantage. The lowest latency. The best responsiveness.",
                "price": 5500,
                "count": 1
            },
            {
                "_id": "6",
                "title": "GeForce RTX 3060",
                "src": "https://i.ibb.co/QnxZZ5w/rtx-3060-ti-v2-oc-01-500x500.jpg",
                "content": "The ASUS TUF Gaming GeForce RTX 3060 Ti V2 OC Graphics Card features NVIDIA Ampere Streaming Multiprocessors: The building blocks for the world’s fastest, most efficient GPU, the all-new Ampere SM brings 2X the FP32 throughput and improved power efficiency. It comes with 2nd Generation RT Cores: Experience 2X the throughput of 1st gen RT Cores, plus concurrent RT and shading for a whole new level of ray tracing performance. It also has 3rd Generation Tensor Cores: Get up to 2X the throughput with structural sparsity and advanced AI algorithms such as DLSS. Now with support for up to 8K resolution, these cores deliver a massive boost in-game performance and all-new AI capabilities. This GeForce RTX 3060 Ti graphics card with LHR (lite hash rate) delivers 25 MH/s ETH hash rate (est.) A new all-metal shroud houses three powerful axial-tech fans that utilize durable dual ball fan bearings. Fan rotation has been optimized for reduced turbulence, and a stop mode brings all three fans to a halt at low temps. Beneath, independent heatsinks for the GPU and memory keep thermals under tight control. Additional features, including TUF components, Auto-Extreme Technology, a new GPU bracket, and a backplate vent make the TUF a proper powerhouse. Axial-tech fan design, with three fans working in tandem to satisfy the thermal demands of NVIDIA's new high-octane design. ",
                "price": 2400,
                "count": 1
            },
            {
                "_id": "7",
                "title": "MacBook Air 13 inc",
                "src": "https://i.ibb.co/nfj2Gst/macbook-air-13-3-inch-silver-1-500x500.jpg",
                "content": "Apple's thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go. It’s here. Our first chip designed specifically for Mac. Packed with an astonishing 16 billion transistors, the Apple M1 system on a chip (SoC) integrates the CPU, GPU, Neural Engine, I/O, and so much more onto a single tiny chip. With incredible performance, custom technologies, and industry-leading power efficiency,1 M1 is not just a next step for Mac — it’s another level entirely.M1 has the fastest CPU we’ve ever made. With that kind of processing speed, MacBook Air can take on new extraordinarily intensive tasks like professional-quality editing and action-packed gaming. But the 8‑core CPU on M1 isn‘t just up to 3.5x faster than the previous generation2 — it balances high-performance cores with efficiency cores that can still crush everyday jobs while using just a tenth of the power.",
                "price": 2000,
                "count": 1

            },
            {
                "_id": "8",
                "title": "Sony WH-1000XM4",
                "src": "https://i.ibb.co/RS85BXK/71o8-Q5-XJS5-L-AC-SY450.jpg",
                "content": "Dual noise sensor technology, featuring two microphones on each earcup, captures ambient noise and passes the data to the HD Noise Cancelling Processor QN1. Using a new algorithm, the HD Noise Cancelling Processor QN1 then applies noise cancelling processing in real time to a range of acoustic environments. Working together with a new Bluetooth® Audio SoC (System on Chip), it senses and adjusts to music and noise signals, as well as acoustic characteristics between the driver unit and ears, at over 700 times per second.",
                "price": 800,
                "count": 1
            },
            {
                "_id": "9",
                "title": "Ryzen WH-1000XM4",
                "src": "https://i.ibb.co/CtsnxCL/6-1-Razer-Nari-Ultimate-1.jpg",
                "content": "Dual noise sensor technology, featuring two microphones on each earcup, captures ambient noise and passes the data to the HD Noise Cancelling Processor QN1. Using a new algorithm, the HD Noise Cancelling Processor QN1 then applies noise cancelling processing in real time to a range of acoustic environments. Working together with a new Bluetooth® Audio SoC (System on Chip), it senses and adjusts to music and noise signals, as well as acoustic characteristics between the driver unit and ears, at over 700 times per second.",
                "price": 800,
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}