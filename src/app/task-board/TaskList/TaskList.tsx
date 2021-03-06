import React, { useState, memo } from 'react'
import { Heading, Box, Flex } from '@chakra-ui/core'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import {
  TaskListQuery,
  useDeleteTaskListMutation,
  useDeleteTaskMutation,
  useCollabQuery,
} from '../../../graphql/generates'
import { NewTaskModal } from '../NewTaskModal'
import { EditTaskListNamePopover } from '../EditTaskListNamePopover'
import { DotsMenu } from '../../../components/DotsMenu/Index'
import { IconButtonWithTooltip } from '../../../components/IconButtonWithTooltip'
import { MemoizedTasksWrapper } from '../MemoizedTasksWrapper'

export const MemoizedTaskListWrapper = memo(({ taskList, refetch }: any) => (
  <>
    {(taskList as any[]).map(({ tasks, ...list }: any, index) => (
      <TaskList
        key={list.id}
        taskList={list}
        tasks={tasks}
        refetch={refetch}
        index={index}
      />
    ))}
  </>
))

MemoizedTaskListWrapper.displayName = 'MemoizedTaskListWrapper'

type TaskListResult = NonNullable<TaskListQuery['taskList']>
type Props = {
  taskList: Omit<TaskListResult['taskList'][number], 'tasks'>
  tasks: TaskListResult['taskList'][number]['tasks']
  refetch: any
  index: number
}

const TaskList = ({ taskList, tasks, refetch, index }: Props) => {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false)
  const { data: collabData } = useCollabQuery({
    variables: useParams<{ collabId: string }>(),
  })
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)
  const [deleteTaskList] = useDeleteTaskListMutation({
    variables: {
      taskListId: taskList.id,
    },
    onCompleted: () => refetch(),
  })
  const [deleteTask] = useDeleteTaskMutation({
    onCompleted: () => refetch(),
  })

  const isOwner = collabData?.collab?.isOwner

  return (
    <Draggable
      draggableId={taskList.id}
      index={index}
      isDragDisabled={!isOwner}
    >
      {provided => (
        <Flex
          ref={provided.innerRef}
          {...provided.draggableProps}
          position="relative"
          direction="column"
          borderRadius={3}
          padding={2}
          bg="white"
          width={300}
          flexShrink={0}
          minHeight={200}
          mr={2}
        >
          <Flex justify="space-between">
            <Heading {...provided.dragHandleProps} size="sm" mb={2} p={2}>
              {taskList.name}
            </Heading>
            {isOwner && (
              <>
                <DotsMenu iconProps={{ ariaLabel: 'Tasklist Options' }}>
                  <StyledOptionMenu>
                    <IconButtonWithTooltip
                      ariaLabel="Create Task"
                      onClick={() => setIsNewTaskModalOpen(true)}
                      icon="add"
                    />
                    <EditTaskListNamePopover
                      taskListId={taskList.id}
                      taskListName={taskList.name}
                    />
                    <IconButtonWithTooltip
                      ariaLabel="Delete Tasklist"
                      onClick={() => deleteTaskList()}
                      icon="delete"
                    />
                  </StyledOptionMenu>
                </DotsMenu>
                {isNewTaskModalOpen && (
                  <NewTaskModal
                    closeModal={() => setIsNewTaskModalOpen(false)}
                    taskListId={taskList.id}
                  />
                )}
              </>
            )}
          </Flex>
          <Droppable droppableId={taskList.id} type="task">
            {roppableProvided => (
              <Box
                ref={roppableProvided.innerRef}
                {...roppableProvided.droppableProps}
                flex={1}
                overflowY="auto"
                p={2}
              >
                <MemoizedTasksWrapper
                  tasks={tasks}
                  deleteTask={deleteTask}
                  selectedTaskId={selectedTaskId}
                  isDraggable={Boolean(collabData?.collab?.isOwner)}
                  setSelectedTaskId={setSelectedTaskId}
                />
                {roppableProvided.placeholder}
              </Box>
            )}
          </Droppable>
        </Flex>
      )}
    </Draggable>
  )
}

const StyledOptionMenu = styled(Box)`
  > :not(:first-of-type) {
    margin-left: 0.5rem;
  }
`
