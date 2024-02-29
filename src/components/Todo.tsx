import { useState } from 'react';
import {
    Box,
    Heading,
    Input,
    Button,
    Checkbox,
    List,
    ListItem,
    IconButton,
    Flex,
    Text,
    Divider
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

function Todo() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const addTask = () => {
        if (newTask.trim() !== '') {
          setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
          setNewTask('');
        }
    };

    const toggleTask = (taskId: number) => {
        setTasks(tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };
    
    const deleteTask = (taskId: number) => {
        const taskToDelete = tasks.find(task => task.id === taskId);
        const confirmDelete = window.confirm(`Are you sure you want to delete \n"${taskToDelete?.text}" ?`);
        
        if (confirmDelete) {
            setTasks(tasks.filter(task => task.id !== taskId));
        }
    };
    
    const countCompletedTasks = () => {
        return tasks.filter(task => task.completed).length;
    };
  
    return (
        <>
            <Box maxW='700px' mx='auto' my={10} p={8} boxShadow='dark-lg' rounded='lg'>
                <Heading textAlign='center'>Chores Todo List</Heading>
                <List spacing={2} mt={16}>
                {tasks.map(task => (
                    <Box px={4} py={2} borderWidth='2px' borderRadius='md' borderColor='teal.500'>
                        <ListItem key={task.id} display='flex' alignItems='center'>
                            <Checkbox borderColor='teal.500' isChecked={task.completed} onChange={() => toggleTask(task.id)} />
                            <Box as='p' mx={4} textDecoration={task.completed ? 'line-through' : 'none'} flex='1' overflow='hidden' whiteSpace='normal' wordBreak='break-word'>
                                {task.text}
                            </Box>
                            <IconButton variant='outline' colorScheme='red' aria-label='Delete' size='md' icon={<DeleteIcon />} onClick={() => deleteTask(task.id)} _hover={{ bg: 'red.500', color: 'white' }} />
                        </ListItem>
                    </Box>
                ))}
                </List>

                <Divider mt={6} borderWidth={1} borderColor='teal.500'/>

                <Flex mt={6} alignItems='center'>
                    <Input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder='Add a new task' _placeholder={{ color: 'inherit' }} maxLength={100} borderColor='teal.500' borderWidth={2} />
                    <Button onClick={addTask} ml={2} colorScheme='teal'>Add Task</Button>
                </Flex>

                <Box mt={4}>
                    <Text textAlign='center' fontWeight='semibold'>Task Completed: {countCompletedTasks()}/{tasks.length}</Text>
                </Box>
            </Box>
        </>
    );
}

export default Todo;