type Config = {
    method?: Uppercase<'post'| 'get' | 'put' | 'delete'>,
    headers?: any,
}
export async function client(endpoint: string, payload: any, config: Config) {
    config.method = !config.method ? 'GET' : config.method;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    config.headers = headers;

    const init: Config & { body?: any, mode?: any } = {
        ...config,
    }

    if (config.method !== 'GET' && config.method !== 'DELETE') {
        init.body = JSON.stringify(payload);
    }

    const response = await fetch(endpoint, init);

    console.log({response})
    if (!response.ok) {
        throw new Error(await response.text());
    }

    return response.json();
}
