export default function guardrail (mathFunction){
    const queue = [];

    let res = mathFunction();

    try{
	res = mathFunction();
    }
    catch(error){
	res = error.toString();
    }

    queue.push(res);
    queue.push('Guardrail was processed');
    return queue;
}
