import { createContext, useContext, useState } from "react";


export const Leftcontext = createContext()


const LeftContextProvider = props=> {
    const [showsubparm, setoutputparm] = useState(false)

    //change theme either darken the theme or lighten the theme
    const [islight , settheme] = useState(true)
    const light = {
        bg : '#fefefe',
        color: '#222',
        ui : '#efefef',
        chart : '#fefefe'
    }
    const dark = {
        bg : '#222',
        color : '#fff',
        ui : '#3f3f3f',
        chart : 'rgb(60, 63, 72)'
    }


    //make some theme tweaks
    const changetheme = ()=> {
        settheme(!islight)
    }
//fade in the output 
const outputsubparm = ()=> {
    setoutputparm(!showsubparm)
}
// post some articles
const [article, setarticle] = useState([
    {id: 1, num : '99', name :'navire', color : '#7fffd4', ink : '#008000'},
    {id: 2, num : '1000', name :'articles', color :'rgb(208, 242, 255)', ink : 'rgb(4, 41, 122)'},
    {id: 3, num : '19', name :'shipment', color :"rgb(255, 247, 205)", ink : '#daa520'}
])

// all the links
const [link, setlink] = useState([
    {id:1, hash : 'Home', font : 'fa fa-home',href:'home'},
    {id:2, hash : 'Situation portière', font : 'fa fa-shopping-cart', href:'situation'},
    {id:3, hash : 'Cumul', font : 'fa fa-file-o', href:'accrued'},
    {id:4, hash : 'Suivis des marchandises', font :'fa fa-map-marker ', href:'invigilate'},
    {id:5, hash : 'Parmetrage', font : 'fa fa-cog', href:'setting'}
])
/***************sublink************** */
const [sublink, setsublink]=useState([
    {id : 1, link: 'User', hash: 'user'},
    {id : 2, link: 'Ports', hash: 'port'},
    {id : 3, link: 'Pays', hash: 'country'},
    {id : 4, link: 'Villes', hash: 'town'},
    {id : 5, link: 'Bureau', hash: 'office'},
])

/**************map position coordinate************** */
const [marker, usemark] = useState([
    {id:1, name : 'conakry harbour', lng : '-15.24324', lat : '15.24548'},
    {id:2, name : 'Dakar harbour', lng : '-13.34324', lat : '16.24548'},
    {id:3, name : 'Accra harbour', lng : '-16.24324', lat : '14.24548'},
    {id:4, name : 'China harbour', lng : '-10.24324', lat : '11.24548'},
    {id:5, name : 'ottawa harbour', lat : 45.421255, lng : -75.9654}
])



return (
    <Leftcontext.Provider value={{showsubparm, outputsubparm, islight, changetheme, light, dark, article, setarticle, link, setlink, sublink, setsublink, marker, usemark}}>
        {props.children}
    </Leftcontext.Provider>
    )
}

export default LeftContextProvider;