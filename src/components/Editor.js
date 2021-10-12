import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

import './Editor.css';

import { Controlled as CEditor} from 'react-codemirror2';

function Editor(props) {
    return (
        <div className="h-1/3 myshadow">
            <div className="h-1.2 bg-green-800 text-white pl-5 flex flex-col justify-around">
                {props.name}
            </div>
            <CEditor className="h-8.8"
                options={{
                    mode: props.language,
                    lineNumbers:true,
                    lint:true,
                    lineWrapping:true,
                    theme:'monokai'
                }} 
            />
        </div>
    );
}

export default Editor;