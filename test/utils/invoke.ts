import {invokeLocal} from '@sanity/runtime-cli/utils'

export default async function invoke(resource, data) {
    return await invokeLocal.default(resource, data,
        {
            clientOptions: {
                dataset: 'test-project-id',
                projectId: 'test',
            },
        },
        {forceColor: false},
    )
}
