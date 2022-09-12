const initialData = {
    cars : [
        // {
        //     'name': 'nissan',
        //     'type' : 'suv',
        //     'fuel': 'petrol',
        //     'description' : 'fsdkfkfkk kfkkdlslls',
        //     'image': 'https://imgcdn.oto.com/large/gallery/exterior/29/2194/nissan-x-trail-front-angle-low-view-844522.jpg',
        //     'rent' : 1000
        // },
        // {
        //     'name': 'mazda',
        //     'type' : 'suv',
        //     'fuel': 'petrol',
        //     'description' : 'fsdkfkfkk kfkkdlslls',
        //     'image': 'https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/mobile/gallery/2022-mazda-3-sportback-hybrid-617bc932e623b.jpg',
        //     'rent' : 800

        // },
        // {
        //     'name': 'benz',
        //     'type' : 'suv',
        //     'fuel': 'petrol',
        //     'description' : 'fsdkfkfkk kfkkdlslls',
        //     'image': 'https://www.carpages.co.uk/images/mercedes-benz/cla-class/mercedes-benz-cla-class-[@master]-[001-012010].jpg',
        //     'rent' : 5000

        // },
        // {
        //     'name': 'toyota',
        //     'type' : 'suv',
        //     'fuel': 'petrol',
        //     'description' : 'fsdkfkfkk kfkkdlslls',
        //     'image': 'https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2019/03/Corolla_Hybrid_013_E8752A42C66E156C23136C861E7A6BAF9B59801D-1500x900.jpg',
        //     'rent' : 2500

        // },
        // {
        //     'name': 'suzuki',
        //     'type' : 'suv',
        //     'fuel': 'petrol',
        //     'description' : 'fsdkfkfkk kfkkdlslls',
        //     'image': 'https://image-prod.iol.co.za/16x9/800/1st-place-Suzuki-Swift-935-units?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/c9311442-3e1d-5b17-ac58-96970f5086f8&operation=CROP&offset=54x75&resize=913x511',
        //     'rent' : 1000

        // },
        // {
        //     'name': 'bmw',
        //     'type' : 'suv',
        //     'fuel': 'petrol',
        //     'description' : 'fsdkfkfkk kfkkdlslls',
        //     'image': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
        //     'rent' : 4000

        // },
        // {
        //     'name': 'mitsubishi',
        //     'type' : 'suv',
        //     'fuel': 'petrol',
        //     'description' : 'fsdkfkfkk kfkkdlslls',
        //     'image': 'https://www.mitsubishi-motors.com/en/products/images/models/modal/pajero_sport.jpg',
        //     'rent' : 3000

        // },
        // {
        //     'name': 'Honda',
        //     'type' : 'suv',
        //     'fuel': 'petrol',
        //     'description' : 'fsdkfkfkk kfkkdlslls',
        //     'image': 'https://cdnblob.fastly.carvana.io/2001892344/post-large/normalized/zoomcrop/2001892344-edc-02.jpg',
        //     'rent' : 2000

        // }
       
    ]
};
export const carsReducer = (state= initialData,action)=> {
    switch(action.type)
    {
        case 'GET_ALL_CARS' : {
            return{
                ...state,
                cars : action.payload
            }
        }
        default: return state
    }
};