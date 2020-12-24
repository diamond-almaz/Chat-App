import React from 'react';
import s from './Profile.module.css';
import { Field,reduxForm } from 'redux-form';
import {connect} from 'react-redux'
import {changeOneInterest,buttonIsClicked} from '../../redux/profile-reducer'


const Interests = (props) => {
    let translateInterests={
        "sport": 'спорт',
        "creation": 'творчество',
        "music": 'музыка',
        "literature": 'литература',
        "film": 'кино',
        "science": 'наука',
        "cars": 'автомобили',
        "technology": 'техника',
        "politics": 'политика',
        "travel": 'путешествие',
        "cooking": 'кулинария',
        "art": 'искусство',
        "games": 'игры',
        "craft": 'ремесло',
        "parenting": 'материнство/отцовство'
    }

    let arr=[];
    for (let i in props.interests){
        if (props.interests[i]==1)
        {
            for (let u in translateInterests)
                if (i==u) arr.push(translateInterests[u])
        }
    }
    let showInterests=arr.join(', ')

    let buttonIsClicked=()=>{
        props.buttonIsClicked();
        props.clearInterests();
    }

    let onSubmit=(data,dispatch,propss)=>{
        debugger;
        let count=0
        for (let i in data)
        {
            if (data[i]) count++;
        }
        if (count<3) {
            alert(`Количество интересов должно быть не меньше 3`)
            // dispatch(propss.reset())
            // data={}
            return
        }
        else if (count>5) {
            alert(`Количество интересов должно быть не больше 5`)
            // data={}
            // dispatch(propss.reset())
            return
        }

        props.createInterests(data)
        props.buttonIsClicked();
    }


    return (<>
                <div>Интересы: {showInterests} {props.btn===true?'':arr.length==0?<button onClick={buttonIsClicked}>Добавить интересы</button>:<button onClick={buttonIsClicked}>Изменить интересы</button>} </div>
            {/*<button onClick={changeItemsInterests}>Изменить интересы</button>*/}

            {props.btn===true?<ChangeInterestsFormRedux onSubmit={onSubmit} interests={props.interests} translateInterests={translateInterests}/>:''}




        </>
    )
}
const ChangeInterestsForm=(props)=>{
    let arr=[]

        for (let i in props.interests){
            arr.push(<div><Field component={'input'} type="checkbox" name={i}/>
                <label htmlFor={i}>{props.translateInterests[i]}</label> </div>)
        }



    return (<form onSubmit={props.handleSubmit}>
        {arr}
        <div>
            <button>Готово</button>
        </div>
    </form>)
}



const ChangeInterestsFormRedux=reduxForm({form: 'interests'})(connect(null, {changeOneInterest, buttonIsClicked})(ChangeInterestsForm))



export default Interests;