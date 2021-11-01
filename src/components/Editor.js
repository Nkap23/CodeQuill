import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/addon/display/autorefresh';

import './styles/Editor.css';

import { Controlled as CEditor} from 'react-codemirror2';

function Editor(props) {
    return (
        <div className="h-8.8 sm:h-1/3 myshadow">
            <div className="hidden sm:block h-1.2 bg-green-800 text-white pl-5 flex flex-col justify-around">
                {props.name}
            </div>
            <CEditor className="h-full sm:h-8.8"
                value={props.value}
                onBeforeChange={(editor,data,value)=>{
                    props.onChange(value);
                }}
                options={{
                    mode: props.language,
                    lineNumbers:true,
                    lint:true,
                    lineWrapping:true,
                    theme:'monokai',
                    autoRefresh: true
                }} 
            />
        </div>
    );
}

export default Editor;