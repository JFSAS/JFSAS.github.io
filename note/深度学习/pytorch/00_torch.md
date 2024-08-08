# pytorch


```python
import torch
device = "cuda" if torch.cuda.is_available() else "cpu"
device
```




    'cuda'




```python
## move tensor to device 
tensor = torch.tensor([1,2,3])
print(tensor.device)
tensor_on_gpu = tensor.to(device)
print(tensor_on_gpu.device)
```

    cpu
    cuda:0
    


```python
!nvidia-smi
```

    Sun Aug  4 21:19:53 2024       
    +-----------------------------------------------------------------------------------------+
    | NVIDIA-SMI 555.85                 Driver Version: 555.85         CUDA Version: 12.5     |
    |-----------------------------------------+------------------------+----------------------+
    | GPU  Name                  Driver-Model | Bus-Id          Disp.A | Volatile Uncorr. ECC |
    | Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
    |                                         |                        |               MIG M. |
    |=========================================+========================+======================|
    |   0  NVIDIA GeForce RTX 3060 ...  WDDM  |   00000000:01:00.0  On |                  N/A |
    | N/A   50C    P5             16W /  140W |    2156MiB /   6144MiB |     25%      Default |
    |                                         |                        |                  N/A |
    +-----------------------------------------+------------------------+----------------------+
                                                                                             
    +-----------------------------------------------------------------------------------------+
    | Processes:                                                                              |
    |  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
    |        ID   ID                                                               Usage      |
    |=========================================================================================|
    |    0   N/A  N/A       912    C+G   ...CBS_cw5n1h2txyewy\TextInputHost.exe      N/A      |
    |    0   N/A  N/A      1228    C+G   ...2txyewy\StartMenuExperienceHost.exe      N/A      |
    |    0   N/A  N/A      3428    C+G   ...n\126.0.2592.113\msedgewebview2.exe      N/A      |
    |    0   N/A  N/A      5348    C+G   C:\Windows\explorer.exe                     N/A      |
    |    0   N/A  N/A      5772    C+G   ...nt.CBS_cw5n1h2txyewy\SearchHost.exe      N/A      |
    |    0   N/A  N/A     18596    C+G   ...\cef\cef.win7x64\steamwebhelper.exe      N/A      |
    |    0   N/A  N/A     18940    C+G   ...oogle\Chrome\Application\chrome.exe      N/A      |
    |    0   N/A  N/A     19452    C+G   ...crosoft\Edge\Application\msedge.exe      N/A      |
    |    0   N/A  N/A     19916    C+G   ...on\wallpaper_engine\wallpaper32.exe      N/A      |
    |    0   N/A  N/A     20080    C+G   ...ta\Local\Programs\aDrive\aDrive.exe      N/A      |
    |    0   N/A  N/A     20496      C   ...rograms\Python\Python310\python.exe      N/A      |
    |    0   N/A  N/A     22392    C+G   ...\cef\cef.win7x64\steamwebhelper.exe      N/A      |
    |    0   N/A  N/A     22692    C+G   ...5n1h2txyewy\ShellExperienceHost.exe      N/A      |
    |    0   N/A  N/A     23284    C+G   ...n\126.0.2592.113\msedgewebview2.exe      N/A      |
    |    0   N/A  N/A     23456    C+G   ...oogle\Chrome\Application\chrome.exe      N/A      |
    |    0   N/A  N/A     25624    C+G   D:\Microsoft VS Code\Code.exe               N/A      |
    +-----------------------------------------------------------------------------------------+
    


> **warning**
>
> if tensor is on gpu can't use numpy() to convert it to numpy array
>  on numpy array, the array only calculate on cpu


```python
## tensor back to cpu
tensor_on_cpu = tensor_on_gpu.to("cpu")
tensor_on_gpu,tensor_on_cpu.numpy()

```




    (tensor([1, 2, 3], device='cuda:0'), array([1, 2, 3], dtype=int64))



## exercises


```python
## firset create a random tensor with (7,7)
import torch
torch.manual_seed(0)
rand = torch.rand(size = (7,7))
print(rand)

```

    tensor([[0.4963, 0.7682, 0.0885, 0.1320, 0.3074, 0.6341, 0.4901],
            [0.8964, 0.4556, 0.6323, 0.3489, 0.4017, 0.0223, 0.1689],
            [0.2939, 0.5185, 0.6977, 0.8000, 0.1610, 0.2823, 0.6816],
            [0.9152, 0.3971, 0.8742, 0.4194, 0.5529, 0.9527, 0.0362],
            [0.1852, 0.3734, 0.3051, 0.9320, 0.1759, 0.2698, 0.1507],
            [0.0317, 0.2081, 0.9298, 0.7231, 0.7423, 0.5263, 0.2437],
            [0.5846, 0.0332, 0.1387, 0.2422, 0.8155, 0.7932, 0.2783]])
    


```python
device=  "cuda" if torch.cuda.is_available() else "cpu"
print("device:{%s}"%device)
torch.cuda.manual_seed(1234)
torch.manual_seed(1234)
tensor_A = torch.rand(2,3).to(device)
tensor_b = torch.rand(2,3).to(device)
```

    device:{cuda}
    


```python
mulout2 = torch.matmul(tensor_A,tensor_b.T)
```


```python
max = torch.max(mulout2)
min = torch.min(mulout2)
max,min
```




    (tensor(0.5617, device='cuda:0'), tensor(0.3647, device='cuda:0'))




```python
maxindex = torch.argmax(mulout2)
minindex = torch.argmin(mulout2)
maxindex,minindex

```




    (tensor(3, device='cuda:0'), tensor(0, device='cuda:0'))




```python
torch.manual_seed(7)
tensor_C = torch.rand(1,1,1,10)
print(tensor_C,tensor_C.shape)
tensor_D = tensor_C.squeeze()
print(tensor_D,tensor_D.shape)
```

    tensor([[[[0.5349, 0.1988, 0.6592, 0.6569, 0.2328, 0.4251, 0.2071, 0.6297,
               0.3653, 0.8513]]]]) torch.Size([1, 1, 1, 10])
    tensor([0.5349, 0.1988, 0.6592, 0.6569, 0.2328, 0.4251, 0.2071, 0.6297, 0.3653,
            0.8513]) torch.Size([10])
    


```python

```
