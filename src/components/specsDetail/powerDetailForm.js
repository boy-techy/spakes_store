import React from 'react';
import {Field, reduxForm} from 'redux-form';


const validate = values => {
};

const warn = values => {
};


const PowerDetailForm = props => {
    console.log('Props are: ', props);
   return <form className="power-details col-md-8">
        <table className="table table-bordered">
            <tbody>
            <tr>
                <td colSpan={2} />
                <td>SPHERE</td>
                <td>CYLINDER</td>
                <td>AXIS</td>
                <td>PRISM</td>
                <td>BASE</td>
            </tr>
            <tr>
                <td rowSpan={2}>DISTANCE</td>
                <td>OD</td>
                <td><Field component="input" name="od_Sphere" type="text" placeholder="+/- 1"/></td>
                <td><Field component="input" name="od_Cylinder" type="text" placeholder="+/- 0.60"/></td>
                <td><Field component="input" name="od_Axis" type="text" placeholder="120"/></td>
                <td><Field component="input" name="od_Prism" type="text" placeholder="0.5"/></td>
                <td>down</td>
            </tr>
            <tr>
                <td>OS</td>
                <td><Field component="input" name="os_Sphere" type="text" placeholder="+/- 1"/></td>
                <td><Field component="input" name="os_Cylinder" type="text" placeholder="+/- 0.60"/></td>
                <td><Field component="input" name="os_Axis" type="text" placeholder="120"/></td>
                <td><Field component="input" name="os_Prism" type="text" placeholder="0.5"/></td>
                <td>up</td>
            </tr>
            <tr>
                <td rowSpan={2}>ADD</td>
                <td>OD</td>
                <td><Field component="input" name="ad_OD_Sphere" type="text" placeholder="+/- 2.0" /></td>
                <td colSpan={4} rowSpan={2}>
                    <Field component="textarea" name="additional_desc" type="textArea" placeholder="Additional Information"/>
                </td>
            </tr>
            <tr>
                <td>OS</td>
                <td><Field component="input" name="ad_OS_Sphere" type="text" placeholder="+/- 2.0" /></td>
            </tr>
            </tbody>
        </table>
    </form>
};

export default reduxForm({
    form: 'powerDetail',
    validate,
    warn
})(PowerDetailForm)